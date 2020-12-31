import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mo4',
  templateUrl: './mo4.component.html',
  styleUrls: ['./mo4.component.css']
  
})
export class Mo4Component implements OnInit {

  constructor(private route2: Router,) { }

  ngOnInit(): void {
  }

  Portfolio(){
    this.route2.navigate(["Portfolio"]);
      }
    
    Home(){
    this.route2.navigate(["Home"]);
    
    }
    Social(){
      this.route2.navigate(["Social"]);
      
    }
    analysis(){
      this.route2.navigate(["StockAnalysis"]);
    }
    Mo4(){
    this.route2.navigate(["a"]);
        
    }


}
