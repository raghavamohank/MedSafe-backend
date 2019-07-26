const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const passport = require('passport');

const Patient = require('../../models/Patient');
const Doctor = require('../../models/Doctor');

//patient registration
// @users/register/patient

router.post("/register/patient", (req, res) => {

  Patient.findOne({ email: req.body.email })
    .then(patient => {
      if (patient) {
        res.status(400).json({ error: "patient already exists" });
      }

      const newPatient = new Patient({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPatient.password, salt, (err, hash) => {
          if (err) throw err;
          newPatient.password = hash;
          newPatient
            .save()
            .then(user => {
              res.status(200).json(user);
            })
            .catch(err => res.status(400).json({ err: err }));
        });
      });
    })
    .catch(err => console.log(err));
});

//doctor registration
// @users/register/doctor

router.post("/register/doctor", (req, res) => {

  Doctor.findOne({ email: req.body.email })
    .then(doctor => {
      if (doctor) {
        res.status(400).json({ error: "Doctor already exists" });
      }

      const newDoctor = new Doctor({
        name: req.body.name,
        email: req.body.email,
        proof : req.body.proof,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newDoctor.password, salt, (err, hash) => {
          if (err) throw err;
          newDoctor.password = hash;
          newDoctor
            .save()
            .then(doctor => {
              res.status(200).json(doctor);
            })
            .catch(err => res.status(400).json({ err: err }));
        });
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;


