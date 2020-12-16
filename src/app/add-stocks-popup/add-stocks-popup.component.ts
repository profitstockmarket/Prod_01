import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule } from '@angular/forms'; 
import { Stock } from "../../../model/stockdata";
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-add-stocks-popup',
  templateUrl: './add-stocks-popup.component.html',
  styleUrls: ['./add-stocks-popup.component.css']
})
export class AddStocksPopupComponent implements OnInit {
  stockname:any="";
  showfuzzy:boolean=false;
  stockcode:any="";
  cmp: any="" ; 
  recodate: any="";
  recoprice: any="";
  targetPrice: any="";
  duration: any="";
  disclaimer: any="";
  sector: any="";
  marketcap: any="";
  timestamp:any="";
  
disclaimerlist:any = [];
sectorlist:any = [];
mcaplist:any = [];
stocknamelist=[];

  constructor(public activeModal: NgbActiveModal,private stockservice: StockService) {
    this.stocknamelist = [
      {"stockname":"AMBER ENTERPRISES INDIA LTD","stockcode":"AMBEN"},
      {"stockname":"APOLLO HOSPITALS ENTERPRISES L","stockcode":"APOHOS"},
      {"stockname":"ASTER DM HEALTHCARE LTD","stockcode":"ASTDM"},
      {"stockname":"AXIS BANK LIMITED","stockcode":"AXIBAN"},
      {"stockname":"BATA INDIA LIMITED","stockcode":"BATIND"},
      {"stockname":"BHARTI AIRTEL LTD","stockcode":"BHAAIR"}
    ];
    
    this.disclaimerlist = ['Yes' , 'No'];
    this.sectorlist = [
      {
        "Sector": "Banks"
      },
      {
        "Sector": "Finance"
      },
      {
        "Sector": "Information Technology"
      },
      {
        "Sector": "Miscellaneous"
      },
      {
        "Sector": "Auto"
      },
      {
        "Sector": "Pharmaceuticals and health care"
      },
      {
        "Sector": "Personal Care"
      },
      {
        "Sector": "Petroleum"
      },
      {
        "Sector": "Power"
      },
      {
        "Sector": "Engineering"
      },
      {
        "Sector": "Tobacco"
      },
      {
        "Sector": "Cement"
      },
      {
        "Sector": "Mining"
      },
      {
        "Sector": "Service"
      },
      {
        "Sector": "Auto Ancillaries"
      },
      {
        "Sector": "Chemicals"
      },
      {
        "Sector": "Construction"
      },
      {
        "Sector": "Iron and Steel"
      },
      {
        "Sector": "Food Processing"
      },
      {
        "Sector": "Telecommunications"
      },
      {
        "Sector": "Paints and Pigments"
      },
      {
        "Sector": "Metals - Non Ferrous"
      },
      {
        "Sector": "Retail"
      },
      {
        "Sector": "Consumer Durables"
      },
      {
        "Sector": "Textiles"
      },
      {
        "Sector": "Electric Equipment"
      },
      {
        "Sector": "Petrochemicals"
      },
      {
        "Sector": "Transport"
      },
      {
        "Sector": "Beverages - Alcoholic"
      },
      {
        "Sector": "Infrastructure"
      },
      {
        "Sector": "Tyres"
      },
      {
        "Sector": "Hospitality"
      },
      {
        "Sector": "Plastics"
      },
      {
        "Sector": "Fertilisers"
      },
      {
        "Sector": "Agriculture/Horticulture/Lives"
      },
      {
        "Sector": "Paper"
      },
      {
        "Sector": "Tea / Coffee"
      },
      {
        "Sector": "Electronics"
      },
      {
        "Sector": "Gems and Jewellery"
      },
      {
        "Sector": "Cables"
      },
      {
        "Sector": "Shipping"
      },
      {
        "Sector": "Leather"
      },
      {
        "Sector": "Beverages - Non-Alcoholic"
      },
      {
        "Sector": "Packaging"
      },
      {
        "Sector": "Sugar"
      },
      {
        "Sector": "Glass"
      },
      {
        "Sector": "Edible Fat"
      },
      {
        "Sector": "Rubber"
      },
      {
        "Sector": "Equipments"
      },
      {
        "Sector": "Automobiles"
      }
          ];
    this.mcaplist = ['Small Cap' , 'Mid Cap', 'Large Cap'];

  }

  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var time = today.getHours() +':' + today.getMinutes()+':'+ today.getSeconds();

this.recodate = yyyy + '-' + mm + '-' + dd ;
this.timestamp = this.recodate + "T" + time +"Z"; 
    
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
    newStock.timestamp=this.timestamp;
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
  stockselect(i){
this.stockname=i.stockname;
this.stockcode = i.stockcode;

this.showfuzzy=false;
  }

}
