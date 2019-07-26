const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientProfile = new Schema({
    patient : {
        type : Schema.Types.ObjectId,
        ref : 'Patient'
    },
    medication : {
        type : [String],
        required : true
    },
    allergies : {
        type : [String],
    },
    bloodGroup : {
        type : String,
        required : true
    },
    vitals : [{
        bloodPressure : {
            type : String
        },
        bodyTemperature : {
            type : String
        },
        heartRate : {
            type : String
        },
        respiratoryRate : {
            type : String
        }
    }],
    emergencyContacts : [
        {
            name : {
                type : String,
                required : true
            },
            address : {
                type : String
            },
            contact : {
                type : String,
                required : true
            },
            email : {
                type : String,
                required : true
            }
        }
    ],
    personalDoctor : [
        {
            name : {
                type : String,
                required : true
            },
            contact : {
                type : String,
                required : true
            },
            address : {
                type : String
            }
        }
    ]
});

module.exports = mongoose.model('patientProfile', patientProfile);