import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { map} from 'rxjs/operators';
import {EnterInfoComponent} from './_components/enter-info/enter-info.component'


@Injectable({
  providedIn: 'root'
})

export class DataService {
  // deleteempd(loadedPosts: {}) {
  //   throw new Error("Method not implemented.");
  // }
  constructor(
    private http: HttpClient
  ) { }

  
  RL = 'https://apirest-8f705.firebaseio.com/posts.json'
  emp: any;
   

  // getservice(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.RL);
  // }
 


  baseURLi = 'https://apirest-8f705.firebaseio.com/posts.json/';
  
  // deletedataUser(): Observable<Post[]> {
  //   return this.http.delete<Post[]>(this.baseURLi);
  // }
  // deletecheck(){
  //   alert('delete - Service ')  
   
  //   return this.http.delete<void>(`${this.baseURLi}${this.userid}`)
  // //  debugger;
    
  // }  

}