import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCatalogComponent } from "./service-catalog/service-catalog.component";
import { PaymentInfoComponent } from "./payment-info/payment-info.component";
import { TransactionComponent } from './transaction/transaction.component';

//import { AuthGuard } from './core/auth/auth.guard';

//import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
 // { path: '', component: ServiceCatalogComponent, canActivate: [AuthGuard] }
 { path: '', component: ServiceCatalogComponent },
 { path: 'paymentInfo/:refId', component: PaymentInfoComponent },
 { path: 'transaction/:refId', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
