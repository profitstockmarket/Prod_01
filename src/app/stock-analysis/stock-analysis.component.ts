import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrls: ['./stock-analysis.component.css']
})
export class StockAnalysisComponent implements OnInit {

  constructor(private route1:Router) { }

  ngOnInit(): void {
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
        Portfolio(){
          this.route1.navigate(["Portfolio"]);
            }
  

}

