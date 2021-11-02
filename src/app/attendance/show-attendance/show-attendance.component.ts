import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Attendance } from 'src/app/_interfaces/attendance.model';

@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.css']
})
export class ShowAttendanceComponent implements OnInit {

  constructor(private _attendanceService:AttendanceService) { }
  attdnce:Attendance[]=[];
  ngOnInit(): void {
    this._attendanceService.getattendancelist().subscribe(data=>{
      this.attdnce = data as Attendance[];
    });
  }

}
