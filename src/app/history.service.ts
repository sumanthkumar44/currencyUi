import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private baseUrl = 'http://localhost:8080/getHistoryData/'; 

  constructor(private http:HttpClient) { }


  getHistoryDet(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }  
}
