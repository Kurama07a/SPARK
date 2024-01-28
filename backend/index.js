const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const branches = require('./routes/branches');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/spark')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/branches', branches);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

