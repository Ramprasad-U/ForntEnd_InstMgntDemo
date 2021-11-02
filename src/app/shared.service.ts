import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _http: HttpClient) { }

  getdeplist(): Observable <any[]>{
    return this._http.get<any>('https://localhost:5001/api/Department');
  }
  public getData = (route: string) =>{
    return this._http.get(route);
  }
}
