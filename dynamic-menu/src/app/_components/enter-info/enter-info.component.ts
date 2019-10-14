import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Post } from '../../post.model';
import { Router } from '@angular/router';
import {DataService} from '../../data.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-enter-info',
  templateUrl: './enter-info.component.html',
  styleUrls: ['./enter-info.component.css']
})
export class EnterInfoComponent implements OnInit {
  navigation: any;
  navName:any;
  urlLink: any;
  styles: any;
  linkColor: any;
  newColor: any;
  
  constructor(
    private http: HttpClient,
    private _dataService : DataService,
    private router: Router
  ){}

  ngOnInit() {
      this.navigation= [
        
      ];
      // this.setColor(this.newColor);
      
  }
  
  addNavigation(){
    console.log(this.urlLink+ ' '+this.navName);
    this.navigation.push(
      {name: this.navName, age: this.urlLink}
    ) ,
    console.log(this.navigation);
    
  }
  setColor(newColor: any) {
    //console.log('newColor');
    
    this.linkColor = newColor;
    console.log('value', newColor);
  }
  
  deleteNavigation(name:any){
    console.log('name');
    for(var i=0; i < this.navigation.length; i++){
      if(this.navigation[i]['name'] == name){
        this.navigation.splice(i, 1);
      }
    }
  }

  public Setvalue(){
    this.styles = {'background-color': '{{color}}'}
  }
 
}
