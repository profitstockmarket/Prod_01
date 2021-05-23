import {Injectable,EventEmitter,Output} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable,Subject,throwError } from 'rxjs';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'})

export class RegService {
    
     //private url = 'https://stockdata.profitstockmarket.com/api/regs';
     private url = 'http://localhost:8080/api/regs';
     apiKey_ipStack = "c9278812968e691e3612500a62cf087c"
     private url2 = 'http://api.ipstack.com/';
    constructor(private http:HttpClient) {
        
    }
    
    


    
      addregs(regdata): Observable<any> {
        return this.http.post(this.url,regdata,httpOptions);
        
      
      }
      loadIp(): Observable<any> {
        return this.http.get('https://api.ipify.org/?format=json')
                
      }
      getgeolocationfrmip(ip): Observable<any> {
        //return this.http.get('http://api.ipstack.com/2.36.229.44?access_key=c9278812968e691e3612500a62cf087c')
        let url3 = this.url2+ip+"?access_key="+this.apiKey_ipStack;
        
        return this.http.get(url3);
                
      }
      
      

     
      
}

