import { Component, OnInit } from '@angular/core';
import { AttendancedetailsService } from 'src/app/services/attendancedetails.service';
import { Attendancedetails } from 'src/app/_interfaces/attendancedetails.model';

@Component({
  selector: 'app-show-attendancedetails',
  templateUrl: './show-attendancedetails.component.html',
  styleUrls: ['./show-attendancedetails.component.css']
})
export class ShowAttendancedetailsComponent implements OnInit {

  constructor(private _attendancedetails:AttendancedetailsService) { }

  Attdncedetails:Attendancedetails[]=[];
  ngOnInit(): void {
    this._attendancedetails.getattendancedetailslist().subscribe(data=>{
      this.Attdncedetails = data as Attendancedetails[];
    });

  }

}
