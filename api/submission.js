var express = require('express');
var router = express.Router();

var Submission = require('../models/submissionModel');
var Utils = require('../utils');

router.post('/:id', async (req, res) => {
    try {
        req.user.doneQuestionnaires.push(req.params.id);
        await req.user.save();
        await Submission.create({
            questionnaire: req.params.id,
            answers: req.body,
            submittedBy: req.user
        });
        res.send(true);
    } catch(err) {
        Utils.handleException(res, err);
    }
});

module.exports = router;