
import { Inject, Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {

  constructor(private storage:LocalStorageService) {
 
  }

  toggleDisplay(isShow:boolean) :boolean {
    isShow = !isShow;
    return isShow;
  }


}
