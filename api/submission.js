var express = require('express');
var router = express.Router();

var Submission = require('../models/submissionModel');
var Utils = require('../utils');

router.post('/:id', async (req, res) => {
    try {
        res.send(
            await Submission.create({
                questionnaire: req.params.id,
                answers: req.body,
                submittedBy: req.user
            })
        );
        // TODO: add submission to req.user.doneQuestionnaires
    } catch(err) {
        Utils.handleException(res, err);
    }
});

module.exports = router;