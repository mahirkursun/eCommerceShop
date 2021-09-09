import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable()
export class AlertifyService {

  constructor() { }
/*Alert Mesaj */
  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.error(message); 
  }

  warning(message:string){
    alertify.warning(message); 
  }
}
