import {Injectable,EventEmitter,Output} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
// import {Stock } from '../../../model/stockdata';
import {Customer } from '../../../model/customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'})

export class CustomerService {
    
    // private url = 'https://profitstockmarket.us-east-2.elasticbeanstalk.com/api/stocks';
    // private url = 'https://stockdata.profitstockmarket.com/api/stocks';
    // private url = 'https://stockdata.profitstockmarket.com/api/customers';
    // private url = 'http://localhost:8080/api/stocks';
    private url = 'http://localhost:8080/api/customers';
    constructor(private http:HttpClient) {
        
    }

    getCustomers (): Observable<any> {
        return this.http.get<any>(this.url);
      }
    
    
    //   getstock(id: string): Observable<stock> {
    //     const url = `${this.stocksUrl}/${id}`;
    //     return this.http.get<stock>(url);
    //   }
    subjectrefershcustomers=new Subject<any>();
    refreshobservable=this.subjectrefershcustomers.asObservable();
    refreshstocklist(customers){
    this.subjectrefershcustomers.next(customers);
    }



      addCustomers(customerdata): Observable<any> {
        return this.http.post(this.url,customerdata,httpOptions);
        
      
      }
     
            
      deleteStock (customer: Customer | string): Observable<any> {
        const id = typeof customer === 'string' ? customer : customer._id;
        const url = `${this.url}/${id}`;
    
        return this.http.delete<Customer>(url, httpOptions);
      }
    
      updatestock (customer: Customer): Observable<any> {
        return this.http.put(this.url, customer, httpOptions);
      }



}

