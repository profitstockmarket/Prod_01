import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mo',
  templateUrl: './mo.component.html',
  styleUrls: ['./mo.component.css']
})
export class MoComponent implements OnInit {

  constructor(private route1:Router,) { }

  ngOnInit(): void {
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
    Mo3(){
      this.route1.navigate(["Mo3"]);
          
      }
      Mo2(){
        this.route1.navigate(["Mo2"]);
            
        }
  
}
