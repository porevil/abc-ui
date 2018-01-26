import { Component, OnInit } from '@angular/core';
import { UserService } from "../core/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-service-catalog',
  templateUrl: './service-catalog.component.html',
  styleUrls: ['./service-catalog.component.css']
})
export class ServiceCatalogComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  onClick(accId : string) {
    
    switch(accId){
      case "1":
      this.userService.setUserProfile("101");
      this.router.navigate(['/paymentInfo/1234567891']);
        break;
      case "2":
      this.userService.setUserProfile("101");
      this.router.navigate(['/paymentInfo/1234567892']);
        break;
      case "3":
      this.userService.setUserProfile("103");
      this.router.navigate(['/paymentInfo/1234567893']);
        break;
      case "4":
      this.userService.setUserProfile("104");
      this.router.navigate(['/paymentInfo/1234567894']);
        break;
      case "5":
      this.userService.setUserProfile("105");
      this.router.navigate(['/paymentInfo/1234567895']);
        break;
      case "6":
        this.userService.setUserProfile("106");
        this.router.navigate(['/paymentInfo/1234567896']);
          break;
      default:
      this.router.navigate(['/paymentInfo/1234567896']);
    }
    
  }

}
