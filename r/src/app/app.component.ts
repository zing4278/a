import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const title = this._route.snapshot.params['title'];
  }
  
}
