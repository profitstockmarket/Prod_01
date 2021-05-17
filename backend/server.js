const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const path= require('path');
const app = express();
const http=require('http');
const https=require('https');




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
const corsOptions = { 
    origin:'http://localhost:4200', 
// origin:'https://profitstockmarket.com',
    optionSuccessStatus: 200
}
//app.use(cors(corsOptions))
app.use(cors())

app.use(express.json());
require('./stock.route.js')(app);
//hardcode the port for node server to start listening to 
const {port= 8080}= process.env;
console.log('PORT is ', port)


app.set('port',port);
 
// const server = http.createServer(app);
const server = app.listen(port,function(){
    
    let host=server.address().address;
    let port=server.address().port;
    console.log("App listening at ",host,port);
})


// server.listen(port);
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

 

