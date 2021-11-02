import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EmployeeService } from './services/employee.service';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ShowStudentInfoComponent } from './student-info/show-student-info/show-student-info.component';
import { SubjectComponent } from './subject/subject.component';
import { ShowSubjectComponent } from './subject/show-subject/show-subject.component';
import { BranchComponent } from './branch/branch.component';
import { ShowBranchComponent } from './branch/show-branch/show-branch.component';
import { AttendancedetailsComponent } from './attendancedetails/attendancedetails.component';
import { ShowAttendancedetailsComponent } from './attendancedetails/show-attendancedetails/show-attendancedetails.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ShowAttendanceComponent } from './attendance/show-attendance/show-attendance.component';
import { SubjectbelongstoComponent } from './subjectbelongsto/subjectbelongsto.component';
import { ShowSubjectbelongstoComponent } from './subjectbelongsto/show-subjectbelongsto/show-subjectbelongsto.component';
import { SubjectService } from './services/subject.service';
import { StudentInfoService } from './services/student-info.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    StudentInfoComponent,
    ShowStudentInfoComponent,
    SubjectComponent,
    ShowSubjectComponent,
    BranchComponent,
    ShowBranchComponent,
    AttendancedetailsComponent,
    ShowAttendancedetailsComponent,
    AttendanceComponent,
    ShowAttendanceComponent,
    SubjectbelongstoComponent,
    ShowSubjectbelongstoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [SharedService,EmployeeService,SubjectService,StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
