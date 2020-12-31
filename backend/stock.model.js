const mongoose = require('mongoose');
const { timestamp } = require('rxjs/operators');

const StockSchema = mongoose.Schema({
   stockname: String,
   stockcode:String,
   cmp: String,
   recodate: String ,
   recoprice:String,
   targetPrice: String ,
   duration: String ,
   disclaimer: String ,
   sector:String,
   marketcap:String,   
   timestamp:String
  

});

module.exports = mongoose.model('Stock',StockSchema);