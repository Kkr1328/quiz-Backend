const AnswerSet = require('../models/AnswerSet');

//@desc     Get all AnswerSets
//@route    GET /api/answerSets
//@access   Public
exports.getAnswerSets = async (req, res, next) => {
	try {
		const answerSets = await AnswerSet.find({});
		return res
			.status(200)
			.json({ success: true, count: answerSets.length, data: answerSets });
	} catch (err) {
		res.status(400).json({ success: false, error: err.message });
	}
};

//@desc     Create new AnswerSet
//@route    POST /api/answerSets
//@access   Public
exports.createAnswerSet = async (req, res, next) => {
	try {
		const answerSet = await AnswerSet.create(req.body);

		return res.status(201).json({
			success: true,
			data: answerSet,
		});
	} catch (err) {
		return res.status(400).json({ success: false, error: err.message });
	}
};
