import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { ShowSubjectComponent } from './subject/show-subject/show-subject.component';
import { ShowStudentInfoComponent } from './student-info/show-student-info/show-student-info.component';
import { ShowAttendanceComponent } from './attendance/show-attendance/show-attendance.component';
import { ShowAttendancedetailsComponent } from './attendancedetails/show-attendancedetails/show-attendancedetails.component';
const routes: Routes = [
  {path:'department',component:DepartmentComponent},
  {path:'showdepartment',component:ShowDepComponent},
  {path:'employeelist',component:ShowEmpComponent},
  {path:'showsubject',component:ShowSubjectComponent},
  {path:'showstdinfo',component:ShowStudentInfoComponent},
  {path:'showattendancelist',component:ShowAttendanceComponent},
  {path:'showattendancedetailslist',component:ShowAttendancedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
