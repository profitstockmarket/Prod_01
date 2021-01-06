import {Injectable,EventEmitter,Output} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
import {Stock } from '../../../model/stockdata';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'})

export class StockService {
    
    private url = 'http://profitstockmarket.us-east-2.elasticbeanstalk.com/api/stocks';
    // private url = 'http://stockdata.profitstockmarket.com/api/stocks';
    // private url = 'http://localhost:8080/api/stocks';
    constructor(private http:HttpClient) {
        
    }

    getStocks (): Observable<any> {
        return this.http.get<any>(this.url);
      }
    
    
    //   getstock(id: string): Observable<stock> {
    //     const url = `${this.stocksUrl}/${id}`;
    //     return this.http.get<stock>(url);
    //   }
    subjectrefershstocks=new Subject<any>();
    refreshobservable=this.subjectrefershstocks.asObservable();
    refreshstocklist(stocks){
    this.subjectrefershstocks.next(stocks);
    }



      addStocks(stockdata): Observable<any> {
        return this.http.post(this.url,stockdata,httpOptions);
        
      
      }
     
            
      deleteStock (stock: Stock | string): Observable<any> {
        const id = typeof stock === 'string' ? stock : stock._id;
        const url = `${this.url}/${id}`;
    
        return this.http.delete<Stock>(url, httpOptions);
      }
    
    //   updatestock (stock: stock): Observable<any> {
    //     return this.http.put(this.stocksUrl, stock, httpOptions);
    //   }



}

