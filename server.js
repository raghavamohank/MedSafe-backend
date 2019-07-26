const express = require('express');
const mongoose = require('mongoose');
const dev = require('morgan');

require('dotenv').config();

const app = express();

const users = require('./routes/api/users');

app.use(dev("dev"));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

mongoose.connect(process.env.mongoUri, {useNewUrlParser : true})
    .then(() => console.log('mongoDB connected'))
    .catch(() => 'db connection failed');

app.use('/users', users)


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`app running on port ${PORT}, press ctrl + c to exit`));
