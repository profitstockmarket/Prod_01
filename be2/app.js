const http = require('http');
//use express 
const express = require('express')
//handling express for a single path only .
const app = express();

 

app.use("/api/regs",(req,res, next) =>{
      const regs = [
        {
            _id : '001', 
            emailid: 'shekhar259@gmail.com', 
            doa: '3 may 2021', 
            ip: '122.123.000.001', 
            timestamp: 'now1', 
        },
        {
            _id : '002', 
            emailid: 'shashi.shekhar@outlook.com', 
            doa: '3 may 2021', 
            ip: '122.123.000.001', 
            timestamp: 'now2', 
        }
               
        
      ];
    
        res.status(200).json(
            {
                message: 'post fetched successfully',
                regs:regs
//loop closed for res.status().json
            });
//loop closed for array regs where we have hardcoded the output . 
        }); 

module.exports = app;

