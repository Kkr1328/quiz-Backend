const express = require('express');
const { createAnswerSet, getAnswerSets } = require('../controllers/answerSets');

const router = express.Router();

router.route('/').get(getAnswerSets).post(createAnswerSet);

module.exports = router;
