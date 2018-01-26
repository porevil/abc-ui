
import { PaymentInfoResponse } from "./core/payment-info-response";

export const PAYMENTINFO :PaymentInfoResponse =  {
    "responseCode":"0",
    "responseDesc":"Success",
    "accountId" : "1",
    "accountName" : "MR.Wachirasak Pakyoo",
    "email" : "wachirasakp@gmail.com",
    "mobileNo" : "0870713245",
    "accountBalance" : "5000.00",
    "savingAccountNo" : "12345678901234",
    "debitAccountNo" : "70000000000001",
    "debitAccountBalance" : "20000",
    "limit" : "5000",
      "billInfo" : {
        "billRefNo" : "123456789",
        "mercCode" :"MEA",
        "mercDesc" : "การไฟฟ้านครหลวง",
        "billAmt" : "3969.38", 
        "payStatus" :"N"
     },
      
      "depositAmt" : "31.62",
      "remainDepositAmt":"4950.53",
      "payableStatus":"Y",
      "payableReason":"Bill payment is available",
      "savingPerMonthAmt":"50.62"
  };

