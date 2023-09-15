/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Auth.servicesService } from './auth.services.service';

describe('Service: Auth.services', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.servicesService]
    });
  });

  it('should ...', inject([Auth.servicesService], (service: Auth.servicesService) => {
    expect(service).toBeTruthy();
  }));
});
