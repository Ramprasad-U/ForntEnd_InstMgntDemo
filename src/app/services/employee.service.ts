import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  getemplist(): Observable <any[]>{
    return this._http.get<any>('https://localhost:5001/api/Employee');

  }
}
