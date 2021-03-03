const mongoose = require('mongoose');
const { timestamp } = require('rxjs/operators');

const CustomerSchema = mongoose.Schema({
  
   emailid: String,
   ip: String,
   field1: String ,
   field2: String ,
   field3: String ,
   field4: String ,
   field5: String ,
   timestamp:String
  });

     email: string;
     ip: any ; 
     field1: any;
     field2: any;
     field3: any;
     field4:any;
     field5:any;
     timestamp:any;

module.exports = mongoose.model('Customer',CustomerSchema);