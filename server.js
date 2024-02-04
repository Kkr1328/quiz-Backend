const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');

dotenv.config({ path: './.env' });

connectDB();

const app = express();
const answerSets = require('./routes/answerSets');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/answerSets', answerSets);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log('Server running on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`);
	//Close server & exit process
	server.close(() => process.exit(1));
});
