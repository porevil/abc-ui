
export class PaymentInfoResponse {
  responseCode:string;
  responseDesc:string;
  accountId : string;
  accountName : string;
  email : string;
  mobileNo : string;
  savingAccountNo :string;
  accountBalance : string;
  debitAccountNo : string;
  debitAccountBalance : string;
  limit : string;
  billInfo :BillInfoObj;
  depositAmt:string;
  remainDepositAmt:string;
  payableStatus:string;
  payableReason:string;
  savingPerMonthAmt:string;
  }

export class BillInfoObj {
  billRefNo : string;
  mercCode :string;
  mercDesc : string;
  billAmt : string;
  payStatus : string;
}
