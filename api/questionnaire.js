var express = require('express');
var router = express.Router();

var Questionnaire = require('../models/questionnaireModel');
var Question = require('../models/questionModel');
var Answer = require('../models/answerModel');
var Utils = require('../utils');

const populateQuestion = (command) => {
    return command.populate({
        path: 'questionList',
        populate: {
            path: 'answers'
        }
    });
}

const getAllQuestions = async (_, res) => {
    try {
        res.send(await populateQuestion(Questionnaire.find()));
    } catch(err) {
        Utils.handleException(res, err);
    }
}

router.get('/:id', async (req, res) => {
    try {
        res.send(await populateQuestion(Questionnaire.findOne({_id: req.params.id})));
    } catch(err) {
        Utils.handleException(req, err);
    }
});

router.get('/', getAllQuestions);

router.post('/', async (req, res) => {
    const session = await Questionnaire.startSession();
    session.startTransaction();
    try {
        const questions = [];
        for (let question of req.body.questionList || []) {
            const answers = [];
            for (let answer of question.answers || []) {
                answers.push(await Answer.create(answer));
            }
            question.answers = answers;
            questions.push(await Question.create(question));
        }
        req.body.questionList = questions;
        const created = await Questionnaire.create(req.body);
        session.commitTransaction();
        res.send(created);
    } catch(err) {
        session.abortTransaction();
        Utils.handleException(res, err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Questionnaire.deleteOne({_id: req.params.id});
        getAllQuestions(req, res);
    } catch(err) {
        Utils.handleException(res, err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        res.send(await Questionnaire.updateOne(
            {_id: req.params.id},
            req.body
        ));
    } catch(err) {
        Utils.handleException(res, err);
    }
});

module.exports = router;