import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PaymentInfoResponse } from './core/payment-info-response';
import { PAYMENTINFO } from "./mock-payment-info";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentInfoService {  
  private baseUrl: string = environment.apiUrl;
  private refId:string;
  payment: Observable<PaymentInfoResponse>;

  constructor(private http : HttpClient){
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getPaymentInfo(accId:string,refNo:string): Observable<PaymentInfoResponse> {  
    console.log('accId :: '+accId +'refNo ::'+refNo);
    return this.http.get<PaymentInfoResponse>(this.baseUrl+'payment/getPaymentInfo?accountId='+accId+'&billRefNo='+refNo);
  }
}
