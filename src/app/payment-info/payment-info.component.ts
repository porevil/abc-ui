import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { UserService } from "../core/user.service";
import { PaymentInfoResponse, BillInfoObj } from "../core/payment-info-response";

import { PaymentInfoService } from "../payment-info.service";
import {MatCardModule} from '@angular/material/card';
import { TransactionService } from "../transaction.service";
import { TransactionInfoRequest } from "../core/transaction-info-request";
import { TransactionInfoResponse } from "../core/transaction-info-response";
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  accountId : string;
  refId : string;
  private sub : any;
  transactionId :string;

  pay : PaymentInfoResponse = new PaymentInfoResponse();
  tranRq : TransactionInfoRequest = new TransactionInfoRequest();
  tranRs:TransactionInfoResponse = new TransactionInfoResponse();
  constructor(private route: ActivatedRoute,private http: HttpClient,private userService: UserService
    ,private paymentInfoService :PaymentInfoService,matCardModule :MatCardModule,private router: Router,private transactionService:TransactionService) { }

  ngOnInit() {
    this.pay.billInfo = new BillInfoObj();
    this.accountId = "1";

    this.sub = this.route.params.subscribe(param =>{
       console.log('in ref'+JSON.stringify(param));
      this.refId= param['refId'] ;
    });
    
    console.log("refId=",this.refId);
    console.log("user Profile ::"+this.userService.getUserProfile());
    let accId:string=this.userService.getUserProfile();
    let referrenceId:string=this.refId;
    this.paymentInfoService.getPaymentInfo(accId,referrenceId).subscribe( 
      payInfo => {
        this.pay = payInfo
        console.log('>>>' + JSON.stringify(this.pay));       
      },
      error => console.log('oops', error)
    
    );;
  }


  confirmPayment() {
    this.tranRq.accountName = this.pay.accountName;
    this.tranRq.accountId = this.pay.accountId;
    this.tranRq.email = this.pay.email;
    this.tranRq.depositAccountNo = this.pay.debitAccountNo;
    this.tranRq.mercDesc = this.pay.billInfo.mercDesc;
    this.tranRq.billRefNo = this.pay.billInfo.billRefNo;
    this.tranRq.billAmount = this.pay.billInfo.billAmt;
    this.tranRq.feeAmount  = "0";
    this.tranRq.savingAccountNo  = this.pay.savingAccountNo;
    this.tranRq.savingAmount  = this.pay.depositAmt;
    this.tranRq.savingPerMonthAmt  = this.pay.savingPerMonthAmt;
    console.log('rq >>>' + JSON.stringify(this.tranRq));
    
    this.transactionService.save(this.tranRq)
.then(
    transInfo => {
      this.transactionId = transInfo.transactionId
      console.log('rs >>>' + JSON.stringify(transInfo ));
      this.router.navigate(['/transaction/'+this.transactionId]);    
    },
    error => console.log('oops', error)
  );
    
    
  }


}
