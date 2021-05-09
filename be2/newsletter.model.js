const mongoose = require('mongoose');
const { timestamp } = require('rxjs/operators');

const NewsletterSchema = mongoose.Schema({
  
   emailid: String,
   ip: String,
   field1: String ,
   field2: String ,
   field3: String ,
   field4: String ,
   field5: String ,
   timestamp:String
  });

 module.exports = mongoose.model('nl',NewsletterSchema);