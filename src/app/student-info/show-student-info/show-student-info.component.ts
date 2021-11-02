import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from 'src/app/services/student-info.service';
import { Studentinfo } from 'src/app/_interfaces/studentinfo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-student-info',
  templateUrl: './show-student-info.component.html',
  styleUrls: ['./show-student-info.component.css']
})
export class ShowStudentInfoComponent implements OnInit {

  constructor(private _studentInfoService:StudentInfoService) { }
  studentInfos:Studentinfo[]=[];
  p:number = 1;
  count:number = 5;

  ngOnInit(): void {
    this._studentInfoService.getstudentinfolist().subscribe(data=>{
      this.studentInfos = data as Studentinfo[];
  });}

}
