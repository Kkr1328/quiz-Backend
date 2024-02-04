const mongoose = require('mongoose');

const AnswerSetSchema = new mongoose.Schema({
	10: {
		type: Number,
		default: null,
	},
	20: {
		type: Number,
		default: null,
	},
	30: {
		type: Number,
		default: null,
	},
	40: {
		type: Number,
		default: null,
	},
	41: {
		type: Number,
		default: null,
	},
	42: {
		type: Number,
		default: null,
	},
	50: {
		type: Number,
		default: null,
	},
	51: {
		type: Number,
		default: null,
	},
	52: {
		type: Number,
		default: null,
	},
	53: {
		type: Number,
		default: null,
	},
	60: {
		type: Number,
		default: null,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('AnswerSet', AnswerSetSchema);
