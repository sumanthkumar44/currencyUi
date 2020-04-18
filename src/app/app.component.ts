import { Component } from '@angular/core';
import {LocalStorageService,LocalStorage} from 'ngx-webstorage';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-history';

  constructor(  private storage:LocalStorageService,  private router: Router  ) { }

 
 
}
