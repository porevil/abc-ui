import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  accountId : string;
  private sub : any;
  refId : string;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(param =>{
      this.refId = param['refId'] ;
    });
    
    console.log("refID=",this.refId)
  }
}
