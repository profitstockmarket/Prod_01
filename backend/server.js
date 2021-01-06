const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const path= require('path');
const app = express();
app.use(bodyparser.json());
const Stock = require('./stock.model.js');
const http=require('http');
var https=require('https');

//Copy the Connection code from mongoDB . Used Connect Your Application option in MongoDb dashboard
var uri = "mongodb+srv://psm01:1hCdtt72WU2eRh3L@cluster0.pekx3.mongodb.net/masterstock1?retryWrites=true&w=majority";

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
    // origin:'http://localhost:4200',

    origin:'http://profitstockmarket.com',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

require('./stock.route.js')(app);
// app.use(express.static(path.join(__dirname,'my-dream-app/dist/my-dream-app/index.html')));
// app.get('*',(req,res)=>{
//     res.sendFile(`${path.join(__dirname,'my-dream-app/dist/my-dream-app/index.html')}`);
// });

//create a server
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

 function initial(){

    let stocks = [
        {"stockname":"AMBER ENTERPRISES INDIA LTD","stockcode":"AMBEN","cmp":"2325","recoprice":"2336.57","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"APOLLO HOSPITALS ENTERPRISES L","stockcode":"APOHOS","cmp":"2361.25","recoprice":"2389.68","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"ASTER DM HEALTHCARE LTD","stockcode":"ASTDM","cmp":"162.85","recoprice":"169.33","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"AXIS BANK LIMITED","stockcode":"AXIBAN","cmp":"626.3","recoprice":"617.25","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"BATA INDIA LIMITED","stockcode":"BATIND","cmp":"1559.15","recoprice":"1401.79","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"BHARTI AIRTEL LTD","stockcode":"BHAAIR","cmp":"507.5","recoprice":"481.26","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"BHARAT FORGE LIMITED","stockcode":"BHAFOR","cmp":"549.5","recoprice":"633.95","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"BIOCON LIMITED","stockcode":"BIOCON","cmp":"453.25","recoprice":"422.23","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"BIRLA CABLE LIMITED","stockcode":"BIRERI","cmp":"58.85","recoprice":"66.25","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"BLUE STAR LTD","stockcode":"BLUSTA","cmp":"792.2","recoprice":"656.48","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"CENTURY TEXTILES & INDUSTRIES","stockcode":"CENTEX","cmp":"381.2","recoprice":"304.45","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"CG POWER AND IND SOLUTIONS LTD","stockcode":"CROGRE","cmp":"45.25","recoprice":"25.83","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"DABUR INDIA LTD","stockcode":"DABIND","cmp":"512.1","recoprice":"521.02","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"DELTA CORP LIMITED","stockcode":"DELCOR","cmp":"157.35","recoprice":"150.09","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"DIVIS LABORATORIES LIMITED","stockcode":"DIVLAB","cmp":"3672.6","recoprice":"3350.6","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"DLF LIMITED","stockcode":"DLFLIM","cmp":"218.6","recoprice":"193.38","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"FEDERAL BANK LTD","stockcode":"FEDBAN","cmp":"66.3","recoprice":"72.55","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"HDFC BANK LIMITED","stockcode":"HDFBAN","cmp":"1382","recoprice":"1180.5","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"HINDUSTAN COPPER LIMITED","stockcode":"HINCOP","cmp":"45","recoprice":"41.86","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"HINDUSTAN UNILEVER LIMITED","stockcode":"HINLEV","cmp":"2363.25","recoprice":"2162.7","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"ICICI BANK LIMITED","stockcode":"ICIBAN","cmp":"510.75","recoprice":"430.77","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"ICICI LOMBARD GEN INSURANCE CO","stockcode":"ICILOM","cmp":"1451.3","recoprice":"1281.02","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"IDFC FIRST BANK LIMITED","stockcode":"IDFBAN","cmp":"37.9","recoprice":"25.23","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"INDUSIND BANK LIMITED","stockcode":"INDBA","cmp":"929.35","recoprice":"700.37","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"INDIABULLS HOUSING FINANCE LTD","stockcode":"INDHO","cmp":"197.45","recoprice":"300.45","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"INSECTICIDES INDIA LTD","stockcode":"INSEC","cmp":"457.05","recoprice":"449.53","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"IOL CHEMICALS & PHARMACEUTICAL","stockcode":"IOLCHE","cmp":"774.05","recoprice":"804.07","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"JK LAKSHMI CEMENT LIMITED","stockcode":"JKLAKS","cmp":"347.1","recoprice":"312.61","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"JK TYRE AND INDUSTRIES LIMITED","stockcode":"JKTYRE","cmp":"83","recoprice":"74.31","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"LAURUS LABS LIMITED","stockcode":"LAULAB","cmp":"326.95","recoprice":"285.39","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"MAHANAGAR GAS LIMITED","stockcode":"MAHGAS","cmp":"1054.95","recoprice":"888.66","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"ORIENT ELECTRIC LIMITED","stockcode":"ORIELE","cmp":"220.35","recoprice":"188.63","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"POLYCAB INDIA LIMITED","stockcode":"POLI","cmp":"1037.75","recoprice":"932.17","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"RBL BANK LIMITED","stockcode":"RBLBAN","cmp":"237.55","recoprice":"328.8","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"ROUTE MOBILE LTD","stockcode":"ROUMOB","cmp":"1155.25","recoprice":"1216.38","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"SALZER ELECTRONICS LTD","stockcode":"SALELE","cmp":"131.65","recoprice":"122.22","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"SBI LIFE INSURANCE COMPANY LTD","stockcode":"SBILIF","cmp":"852.7","recoprice":"786.71","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"STATE BANK OF INDIA","stockcode":"STABAN","cmp":"272.85","recoprice":"198.96","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"SUN TV NETWORK LIMITED","stockcode":"SUNTV","cmp":"475.65","recoprice":"428.09","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"TATA CHEMICALS LTD","stockcode":"TATCHE","cmp":"507.15","recoprice":"344.96","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"TATA COMMUNICATIONS LIMITED","stockcode":"TATCOM","cmp":"1036","recoprice":"963.64","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"TATA CONSUMER PRODUCTS LIMITED","stockcode":"TATGLO","cmp":"575.35","recoprice":"517.24","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"TATA MOTORS LIMITED","stockcode":"TATMOT","cmp":"180.05","recoprice":"138.37","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"TATA STEEL LIMITED","stockcode":"TATSTE","cmp":"622.9","recoprice":"398.68","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"TEJAS NETWORKS LIMITED","stockcode":"TEJNET","cmp":"147.35","recoprice":"123.04","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"THIRUMALAI CHEMICALS LTD","stockcode":"THICHE","cmp":"106.3","recoprice":"75.69","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"ULTRATECH CEMENT LIMITED","stockcode":"ULTCEM","cmp":"4981.8","recoprice":"3950.1","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"VARROC ENGINEERING LIMITED","stockcode":"VARENG","cmp":"418.9","recoprice":"339.2","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"VOLTAS LTD","stockcode":"VOLTAS","cmp":"809.75","recoprice":"598.68","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""},
        {"stockname":"YES BANK LIMITED","stockcode":"YESBAN","cmp":"19.77","recoprice":"15.91","recodate":"12/04/2020","targetPrice":"","duration":"12","disclaimer":"YES","sector":"","marketcap":""}
        ]

    // Init data -> save to MongoDB

    for (let i = 0; i < stocks.length; i++) {
        const stock = new Stock(stocks[i]);
        stock.save();
    }

    console.log(">>> Done - Initial Data!");
}