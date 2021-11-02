import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private _http: HttpClient) { }
  getattendancelist(): Observable <any[]>{
    return this._http.get<any>('https://localhost:5001/api/Attendance');}
}
