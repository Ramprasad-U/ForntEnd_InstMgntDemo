import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { depart } from 'src/app/_interfaces/depart.model';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  public departs: depart[] = [];
  constructor(private _sharedservices:SharedService) { }

  public getMovies = () => {
    let route: string = 'https://localhost:5001/api/Department'; //'http://localhost:5000/api/department';
    this._sharedservices.getData(route)
    .subscribe((result) => {
      this.departs = result as depart[];
    },
    (error) => {
      console.error(error);
    });
  }
  ngOnInit(): void {
  }

}
