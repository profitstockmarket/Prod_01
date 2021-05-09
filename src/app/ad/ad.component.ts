import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable,Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import{interval,Observable,observable} from 'rxjs';
import{Reg} from '../../../model/regdata';
import{RegService} from '../service/reg.service'
 

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})

export class AdComponent implements OnInit {

  @ViewChild('f') queryform: NgForm;
  
  emailid= "";
  date: any="";
  timestamp: any="";
  
  constructor(private regservice:RegService) { 


  }
  
  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.date = yyyy + '-' + mm + '-' + dd;
    this.timestamp = this.date + "@" + time + "Local";

  }

  onSubmit(){
    console.log(this.queryform);
    this.queryform.resetForm();
    alert("Message : thankyou for registering ProfitStockmarket.com");
    }
    
      
    registeremail(){
        let newquery = new Reg(); 
        newquery.emailid=this.emailid;
        newquery.timestamp=this.timestamp;
         
        this.regservice. addregs(newquery)
          
                
              
          };




}