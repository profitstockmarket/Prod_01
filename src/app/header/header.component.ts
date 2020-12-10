import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route1:Router) { }

  ngOnInit(): void {
  }

  Portfolio(){
    this.route1.navigate(["Portfolio"]);
      }
    
    Home(){
    this.route1.navigate(["Homepage"]);
    
    }
    Social(){
      this.route1.navigate(["Social"]);
      
      }
      analysis(){
        this.route1.navigate(["StockAnalysis"]);
        
        }





}
