const mongoose = require('mongoose');
const { timestamp } = require('rxjs/operators');

const ProfitquerySchema = mongoose.Schema({
  
  // _id:String,
  name: String,
  emailid: String,
  query: String ,
  response:String,
  date: String ,
  timestamp:String
  });

module.exports = mongoose.model('Profitquery',ProfitquerySchema);