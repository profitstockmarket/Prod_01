import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import{Profitquery} from '../../../model/profitquery'
import{Profitqueryservice} from '../service/profitquery.service'

@Component({
  selector: 'app-profit-query',
  templateUrl: './profit-query.component.html',
  styleUrls: ['./profit-query.component.css']
})
export class ProfitQueryComponent implements OnInit {
  profitqueryDataList: any = [];
  message:any;
  p:number = 1; 


  @ViewChild('f') queryform: NgForm;
  
  name:any="";
  emailid= "";
  query:any="";
  response: any="" ; 
  date: any="";
  timestamp: any="";
  


  

  constructor(private profitqueryservice:Profitqueryservice) { 
    this.profitqueryservice.refreshobservable.subscribe(item =>{this.profitqueryDataList = item.reverse();}
      
    )

    this.profitqueryservice.getpqs()
    .subscribe(
       profitquerys => {
        console.log(profitquerys);
        this.profitqueryDataList = profitquerys.reverse();
        
      }
    );


  }


  
  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.date = yyyy + '-' + mm + '-' + dd;
    this.timestamp = this.date + "T" + time + "Z";

  }





onSubmit(){
console.log(this.queryform);
this.queryform.resetForm();
alert("Message : Query is Submitted Successfully.Your query will be screened and responded by ProfitStockmarket within 48 Hrs on this page");
}

  
  AddQuery(){
    let newquery = new Profitquery(); 
    newquery.emailid=this.emailid;
    newquery.name=this.name;
    newquery.query=this.query;
    newquery.date=this.date;
    newquery.timestamp=this.timestamp;
    newquery.response=this.response;
    this.profitqueryservice.AddQuery(newquery)
      .subscribe(res => {
        this.profitqueryservice.getpqs()
          .subscribe(
            profitquery => {
              console.log(profitquery);
              this.profitqueryservice.refreshstocklist(profitquery);
            }
          );
      });
    
      }
      

}
