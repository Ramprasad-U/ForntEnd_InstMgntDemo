import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_interfaces/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private _employeeservices:EmployeeService) { }

  Employees:Employee[]=[];

  ngOnInit(): void {
    this._employeeservices.getemplist().subscribe(data=>{
      this.Employees = data as Employee[];
    });

  }

}
