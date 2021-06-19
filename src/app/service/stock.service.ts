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
    
    // private url = 'https://profitstockmarket.us-east-2.elasticbeanstalk.com/api/stocks';
    private url = 'https://stockdata.profitstockmarket.com/api/stocks';
    //private url = 'http://localhost:8080/api/stocks';
    constructor(private http:HttpClient) {
        
    }

    getStocks (): Observable<any> {
        return this.http.get<any>(this.url);
      }
    
    
  
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
    
      updatestock (stock: Stock): Observable<any> {
        return this.http.put(this.url, stock, httpOptions);
      }



}

