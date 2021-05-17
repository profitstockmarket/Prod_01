import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import{Reg} from '../../../model/regdata'
import { RegService } from '../service/reg.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild('sform') form: NgForm;
  
  sform:any="";
  emailid:any= "";
  doa:any="dummy";
  ip:any="dummy";
  timestamp:any="";
  post='No CONTENT';
  date: any="";
  
 

  constructor(private route1:Router, private regservice: RegService) { }
  
  Show_accordionExample:boolean;

  ngOnInit(): void {
this.Show_accordionExample =false;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  this.date = yyyy + '-' + mm + '-' + dd;
  this.timestamp = this.date + "@" + time + "Local";


  }


analysis(){
  this.route1.navigate(["StockAnalysis"]);
}

onSubmit(data:NgForm){

console.log("form submitted ",data)

//alert("form submitted ")

  let newrecord = new Reg(); 
  newrecord.emailid=this.emailid;
  newrecord.doa=this.date;
  newrecord.ip=this.ip;
  newrecord.timestamp=this.timestamp;
  
  this.regservice.addregs(newrecord).subscribe(res =>
    {console.log(res)}, 
        err=>{console.log(err)}
    );
    


  console.log(newrecord)
  this.form.resetForm();


}
    

}




