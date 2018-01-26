import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HorizontalSliderModule } from "angular2-horizontal-slider";

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { ServiceCatalogComponent } from './service-catalog/service-catalog.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { UserService } from "./core/user.service";
import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import { TransactionComponent } from './transaction/transaction.component';
import { PaymentInfoService } from "./payment-info.service";
import { TransactionService } from "./transaction.service";

@NgModule({
  declarations: [
    AppComponent,
    ServiceCatalogComponent,
    PaymentInfoComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HorizontalSliderModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [UserService,PaymentInfoService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
