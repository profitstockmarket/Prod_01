import {Injectable,EventEmitter,Output} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'})

export class RegService {
    
     private url = 'https://stockdata.profitstockmarket.com/api/regs';
     // private url = 'http://localhost:8080/api/regs';
    constructor(private http:HttpClient) {
        
    }


    
      addregs(regdata): Observable<any> {
        return this.http.post(this.url,regdata,httpOptions);
        
      
      }
     
      
}

