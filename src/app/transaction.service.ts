import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionInfoResponse } from './core/transaction-info-response';
import 'rxjs/add/operator/map';
import { TransactionInfoRequest } from "./core/transaction-info-request";
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TransactionService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http : HttpClient){
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  save(tranRq :TransactionInfoRequest){  
    return this.http.post<TransactionInfoResponse>(this.baseUrl+'transaction',tranRq)
    .toPromise()
  }

}
