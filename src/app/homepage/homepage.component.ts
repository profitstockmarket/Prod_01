import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route1:Router) { }
  
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

}
