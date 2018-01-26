import { TestBed, inject } from '@angular/core/testing';

import { PaymentInfoService } from './payment-info.service';

describe('PaymentInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentInfoService]
    });
  });

  it('should be created', inject([PaymentInfoService], (service: PaymentInfoService) => {
    expect(service).toBeTruthy();
  }));
});
