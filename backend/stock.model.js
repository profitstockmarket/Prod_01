//const { ɵɵpureFunction1 } = require('@angular/core');
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
   timestamp:String,
   __v:String,
   dailyChange_prcnt:String,
   dailyChange_prcnt2:String,
   dailyChange_val:String,
   stock_status:String
     

});


module.exports = mongoose.model('Stock',StockSchema);
 