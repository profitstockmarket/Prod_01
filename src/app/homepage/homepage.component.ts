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
  @ViewChild('f') queryform: NgForm;
  emailid= "";
  doa= "";
  ip= "";
  timestamp= "";

  constructor(private route1:Router, private regservice: RegService) { }
  
  Show_accordionExample:boolean;

  ngOnInit(): void {
this.Show_accordionExample =false;
  }


Portfolio(){
this.route1.navigate(["Portfolio"]);
  }

Home(){
this.route1.navigate(["Home"]);

}
Social(){
  this.route1.navigate(["Social"]);
  
}
analysis(){
  this.route1.navigate(["StockAnalysis"]);
}
Mo4(){
 this.route1.navigate(["Mo4"]);
    
}

onSubmit(){
  console.log(this.queryform);
  this.queryform.resetForm();
  //alert("Message : Query is Submitted Successfully.Your query will be screened and responded by ProfitStockmarket within 24 Hrs on this page");
  }

registeremail(){
  let newemail = new Reg(); 
  newemail.emailid=this.emailid;  
  newemail.doa=this.doa;  
  newemail.ip=this.ip;  
  newemail.timestamp=this.timestamp;  
  this.regservice.addregs(newemail)
      
            }

}




