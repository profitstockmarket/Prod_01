const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
const Stock = require('./stock.model.js');
const http=require('http');
//Copy the Connection code from mongoDB . Used Connect Your Application option in MongoDb dashboard 
var uri = "mongodb+srv://psm01:1hCdtt72WU2eRh3L@cluster0.pekx3.mongodb.net/masterstock?retryWrites=true&w=majority";

mongoose.Promise=global.Promise;

mongoose.connect(uri).then(() => {

console.log('Database Connection successful!!')
// initial();

})
.catch(err  => {
console.log('Connection failed!!!',err);
});


//Handles CORS issue . reference was taken from https://grokonez.com/frontend/angular/angular-6/angular-6-httpclient-get-post-put-delete-node-js-express-restapis-with-mongoose-crud-mongodb

const cors = require('cors');
const corsOptions = {
    origin:'http://localhost:4250',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

require('./stock.route.js')(app);

//create a server 
const port= 3000;
app.set('port',port);
// const server = http.createServer(app);
const server = app.listen(3000,function(){
    let host=server.address().address;
    let port=server.address().port;
    console.log("App listening at ",host,port);
})
// server.listen(port);
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:false}));