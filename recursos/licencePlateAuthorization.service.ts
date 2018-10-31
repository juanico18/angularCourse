import { Injectable } from '@angular/core';

@Injectable()
export class LicencePlateAuthorizationService {
  //these could be configured
  oddAllowed: boolean = true;
  evenAllowed: boolean = false;
  isAuthorized: boolean;

  authorize(numberPlate): Promise<string> {
    if (numberPlate%2==0){
      this.isAuthorized = this.evenAllowed;
    } else {
      this.isAuthorized = this.oddAllowed;
    }
    if (this.isAuthorized) {
      return Promise.resolve("allowed to drive in the city center");
    } else {
      return Promise.reject("NOT allowed to drive in the city center");
    };
  }
}
