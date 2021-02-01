const mongoose = require('mongoose');
const { timestamp } = require('rxjs/operators');

const CustomerSchema = mongoose.Schema({
  _id:String, 
  firstname: String,
   lastname:String,
   emailid: String,
   dob: String ,
   password:String,
   field1: String ,
   field2: String ,
   field3: String ,
   field4: String ,
   field5: String ,
   timestamp:String
  });

module.exports = mongoose.model('Customer',CustomerSchema);