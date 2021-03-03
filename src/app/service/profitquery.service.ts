import {Injectable,EventEmitter,Output} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
import {Profitquery } from '../../../model/profitquery';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'})

export class Profitqueryservice {
    

    private queryurl = 'https://stockdata.profitstockmarket.com/api/profitquerys';
    // private queryurl = 'http://localhost:8080/api/profitquerys';
    constructor(private http:HttpClient) {
        
    }

    getpqs (): Observable<any> {
        return this.http.get<any>(this.queryurl);
      }
    
    
    //   getstock(id: string): Observable<stock> {
    //     const url = `${this.stocksUrl}/${id}`;
    //     return this.http.get<stock>(url);
    //   }
    subjectrefershpqs=new Subject<any>();
    refreshobservable=this.subjectrefershpqs.asObservable();
    refreshstocklist(profitquerys){
    this.subjectrefershpqs.next(profitquerys);
    }



      AddQuery(profitquery): Observable<any> {
        return this.http.post(this.queryurl,profitquery,httpOptions);
        
      
      }
     
            
      // deleteStock (profitquery: Profitquery | string): Observable<any> {
      //   const id = typeof profitquery === 'string' ? profitquery : profitquery._id;
      //   const url = `${this.queryurl}/${id}`;
    
      //   return this.http.delete<Profitquery>(url, httpOptions);
      // }
    
      updatestock (profitquery: Profitquery): Observable<any> {
        return this.http.put(this.queryurl, profitquery, httpOptions);
      }



}

