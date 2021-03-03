const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const path= require('path');
const app = express();
const Stock = require('./stock.model.js');
const Customer = require('./customer.model.js');
const Profitquery = require('./profitquery.model.js');
const http=require('http');
var https=require('https');

require('./stock.route.js')(app);
app.use(bodyparser.json());


//Copy the Connection code from mongoDB . Used Connect Your Application option in MongoDb dashboard
var uri = "mongodb+srv://psm01:1hCdtt72WU2eRh3L@cluster0.pekx3.mongodb.net/masterstock1?retryWrites=true&w=majority";

mongoose.Promise=global.Promise;
mongoose.connect(uri).then(() => {
console.log('Database Connection successful!!')


})
.catch(err  => {
console.log('Connection failed!!!',err);
});

//mention the origin to handle CORS issue 
const cors = require('cors'); 
const { Module } = require("module"); 
const { response } = require("express");
const corsOptions = { 
    origin:'http://localhost:4200', 
// origin:'https://profitstockmarket.com',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))





app.get('/test', function (req, res) {
        // const url2 = "http://api.marketstack.com/v1/eod/latest?access_key=f4f09a4e2bd4e7fbe977d106d5f4f9da&symbols=TCS.XNSE,HDFC.XNSE";  
        const url2 = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0296363788592026df2945b899aa2b30";  
    
        https.get( url2, (response) => {
      console.log('statusCode:', response.statusCode);
    //   console.log('headers:', res.headers);
    
      response.on('data', (data) => {
        const stockdata = JSON.parse(data)  
        // const stockdata1=stockdata.data.exchange
        const forecast = stockdata.weather[0].main 
        // console.log(stockdata.data[0].symbol);
        // console.log(stockdata);
        // console.log("Forecast for weather in"+stockdata.name+ "is" + forecast);
        // res.send(stockdata.data[0].symbol) 
        res.send("<h1> Temperaure in "+stockdata.name + " now is" +  stockdata.main.temp + " degrees    and its "   +  forecast + "</h1>" ) 
        
    

          
        
        // process.stdout.write(data);
        
      });
    
    }).on('error', (e) => {
      console.error(e);
    });
    
  
})



//hardcode the port for node server to start listening to 
const {port= 8080}= process.env;
console.log('PORT is ', port)


app.set('port',port);
 
// const server = http.createServer(app);
const server = app.listen(port,function(){
    console.log("server ",server.address());
    let host=server.address().address;
    let port=server.address().port;
    console.log("App listening at ",host,port);
})


// server.listen(port);
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:false}));



