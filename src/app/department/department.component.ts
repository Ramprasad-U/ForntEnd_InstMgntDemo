import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { depart } from '../_interfaces/depart.model';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private _sharedservices: SharedService) { }
  
  Departments:depart[]=[];

  ngOnInit(): void {
    this._sharedservices.getdeplist().subscribe(data=>{
      this.Departments = data as depart[];
    });
  //   let route: string = 'https://localhost:5001/api/Department'; //'http://localhost:5000/api/department';
  // this._sharedservices.getData(route)
  // .subscribe((result) => {
  //   this.departs = result as depart[];

  }

}
