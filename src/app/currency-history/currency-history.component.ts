import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../history.service';
import {History} from './history';
import {LocalStorageService,LocalStorage} from 'ngx-webstorage';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-currency-history',
  templateUrl: './currency-history.component.html',
  styleUrls: ['./currency-history.component.scss']
})
export class CurrencyHistoryComponent implements OnInit {

  constructor( private historyService:HistoryService, private storage:LocalStorageService,  private router: Router  ) { }

  historyList: History[];
  @LocalStorage('userName')
  userName: string;
  @LocalStorage('password')
  password: string;

  ngOnInit(): void {

    console.log(this.userName);
    if (!this.userName || !this.password)
    {
      this.router.navigate(["/login"]);

    }
    this.historyService.getHistoryDet().subscribe(data =>{  
      this.historyList =data;  
      console.log(this.historyList);
      
      })  
  }
  logOut()
  {
    this.storage.clear('userName');
    this.storage.clear('password');
    this.router.navigate(["/login"]);
  }

}
