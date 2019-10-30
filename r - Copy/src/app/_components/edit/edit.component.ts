import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }
  saveCost: any;
  ngOnInit() {
    const name = 'Hello angular inline input';
    const cost = 100;
    // saveCost(value: any){
    //   this.cost=value;
    // }    
  }


 


}
