import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})

export class AdComponent{

   
  onSubmit(){
     
    alert("Message : Query is Submitted Successfully.Your query will be screened and responded by ProfitStockmarket within 24 Hrs on this page");
    }

subscribe(){
 
}

  
}