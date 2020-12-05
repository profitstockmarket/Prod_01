import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../service/stock.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stock } from "../../../model/stockdata";
import {AddStocksPopupComponent} from "../add-stocks-popup/add-stocks-popup.component";

// import {AddStocksPopupComponent} from '../add-stocks-popup/add-stocks-popup.component';
// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Add New Stock</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//     <form>
//     <label>Stock Name : <input type="text"></label>
//     <label>Stock Id: <input type="text"></label>
//     <label>CMP: <input type="number"></label>
//     <label>Reco date : <input type="date"></label>
//     <label>Recomended price : <input type="number"></label>
//     <label>Target Price : <input type="number"></label>
//     <label>Duration : <input type="number"></label>
//     <label>Do I Hold : <input type="text"></label>
// </form>

    
//     </div>
    
//     <div class="modal-footer">
//     <button type="button" class="btn btn-primary"(click)="AddStock()">
//   Add
// </button>
//       <button type="button" class="btn btn-danger" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })

// export class NgbdModalContent {
//   AddStock() {
//   }

//   stockName: any = "hdfc";
//   constructor(public activeModal: NgbActiveModal) { }
// }

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  stockDataList: any = [];
  message:any;

  constructor(private route1: Router, private stockservice: StockService, private modalService: NgbModal) {

    this.stockservice.refreshobservable.subscribe(item =>{this.stockDataList = item;}
      
    )

    this.stockservice.getStocks()
      .subscribe(
        stocks => {
          console.log(stocks);
          this.stockDataList = stocks;
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
  Cal_prcnt(cmp, targetPrice) {

    const prcnt = ((targetPrice - cmp) / cmp)*100;
    return prcnt.toFixed(2);
  }
  deleteStock(stockData){
this.stockservice.deleteStock(stockData._id).subscribe(result=> this.message ="Stock Deleted Successfully");


  }
}


