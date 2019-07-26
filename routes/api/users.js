const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');


const Patient = require('../../models/Patient');
const Doctor = require('../../models/Doctor');

router.get('/test', (req, res, next) => {
    res.send('test')
});

module.exports = router;


