var express = require('express');
var router = express.Router();

var Questionnaire = require('../models/questionnaireModel');
var Question = require('../models/questionModel');
var Answer = require('../models/answerModel');
var Utils = require('../utils');

router.get('/', async (_, res) => {
    try {
        res.send(await Questionnaire.find()
                    .populate({
                        path: 'questionList',
                        populate: {
                            path: 'answers'
                        }
                    })
        );
    } catch(err) {
        Utils.handleException(res, err);
    }
});

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
})

module.exports = router;