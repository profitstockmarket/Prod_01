import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { Stock } from "../../../model/stockdata";
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-add-stocks-popup',
  templateUrl: './add-stocks-popup.component.html',
  styleUrls: ['./add-stocks-popup.component.css']
})
export class AddStocksPopupComponent implements OnInit {
  stockname:any="";
  stockcode:any="";
  cmp: any="" ; 
  recodate: any="";
  recoprice: any="";
  targetPrice: any="";
  duration: any="";
  disclaimer: any="";
  sector: any="";
  marketcap: any="";
  
  constructor(public activeModal: NgbActiveModal,private stockservice: StockService) {
    
  }

  ngOnInit(): void {
    
  }
  AddStock() {
    let newStock = new Stock();
    newStock.stockname=this.stockname;
    newStock.stockcode=this.stockcode;
    newStock.cmp=this.cmp;
    newStock.recodate=this.recodate;
    newStock.recoprice=this.recoprice;
    newStock.targetPrice=this.targetPrice;
    newStock.duration=this.duration;
    newStock.disclaimer=this.disclaimer;
    newStock.sector=this.sector;
    newStock.marketcap=this.marketcap;
    this.stockservice.addStocks(newStock)
      .subscribe(res=>{
        this.stockservice.getStocks()
      .subscribe(
        stocks => {
          console.log(stocks);
          this.stockservice.refreshstocklist(stocks);
        }
      );
      });
    this.activeModal.close('Close click');
    
    
  }

}
