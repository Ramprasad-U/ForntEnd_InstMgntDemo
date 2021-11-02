import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/_interfaces/subject.model';

@Component({
  selector: 'app-show-subject',
  templateUrl: './show-subject.component.html',
  styleUrls: ['./show-subject.component.css']
})
export class ShowSubjectComponent implements OnInit {

  constructor(private _subjectservice:SubjectService) { }
subjects:Subject[]=[];

  ngOnInit(): void {
    this._subjectservice.getsubjectlist().subscribe(data=>{
      this.subjects = data as Subject[];
    });

  }

}
