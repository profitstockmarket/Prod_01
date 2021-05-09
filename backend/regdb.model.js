const mongoose = require('mongoose');
const { timestamp } = require('rxjs/operators');

const regdbSchema = mongoose.Schema({
  
   emailid: String,
   doa: String,
   ip: String ,
   timestamp:String,
  });

  

module.exports = mongoose.model('Reg',regdbSchema);