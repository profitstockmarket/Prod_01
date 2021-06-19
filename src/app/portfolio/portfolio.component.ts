import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../service/stock.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stock } from "../../../model/stockdata";
import {AddStocksPopupComponent} from "../add-stocks-popup/add-stocks-popup.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  stockDataList: any = [];
  message:any;
  p:number = 1; 

  constructor(private route1: Router, private stockservice: StockService, private modalService: NgbModal) {

    this.stockservice.refreshobservable.subscribe(item =>{this.stockDataList = item.reverse();}
      
    )

    this.stockservice.getStocks()
      .subscribe(
        stocks => {
          console.log(stocks);
          this.stockDataList = stocks.reverse();
          
        }
      );

  }

  ngOnInit(): void {
  }

  Home() {
    this.route1.navigate(["Homepage"]);

  }
  Social() {
    this.route1.navigate(["Social"]);

  }
  analysis() {
    this.route1.navigate(["StockAnalysis"]);

  }
  Portfolio() {
    this.route1.navigate(["Portfolio"]);
  }

  open() {
    const modalRef = this.modalService.open(AddStocksPopupComponent);
    modalRef.componentInstance.name = 'World';
  }


  Cal_prcnt(recoprice, targetPrice) {

    const prcnt = ((targetPrice - recoprice) /(targetPrice)*100);
    return prcnt.toFixed(2);
  }
  
  getrgb(input) {
    //check type of variable input 
    var stscolor = "Green"
    var pointNum = parseFloat(input);
    if (pointNum < 0.01) {
      stscolor = "Red"
    }
    return stscolor ;  
  }
  
  
  deleteStock(stockData){
this.stockservice.deleteStock(stockData._id).subscribe(result=> {this.message ="Stock Deleted Successfully";
this.stockservice.getStocks()
      .subscribe(
        stocks => {
          console.log(stocks);
          this.stockservice.refreshstocklist(stocks);
          this.message=null;
        }

        
      );

});



  }
}


