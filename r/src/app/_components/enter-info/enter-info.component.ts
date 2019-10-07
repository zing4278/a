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
  loadedPosts: Post[] = [];
  isFetching = false;
  // DataService: any;

  constructor(
    private http: HttpClient,
    private _dataService : DataService,
    private router: Router
  ){}

  ngOnInit() {
    this.fetchPosts();
  }
 
  viewUserInfo(title: any){
    alert('viewUserInfo')
    this.router.navigate(['viewInfo', title])
  }

  onCreatePost(postData: { title: string; content: string, date: number }) {
    this.http
      .post(
        'https://apirest-8f705.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }
 
  fetchPosts(){
    this.isFetching = true;
    this.http
    .get('https://apirest-8f705.firebaseio.com/posts.json')
    .pipe(
      map(responseData  => {
      const postsArray = [];
        for(const user in responseData){
          if (responseData.hasOwnProperty(user)){
            postsArray.push({ ...responseData[user], id: user})
          }
        }
        return postsArray;
      })
    )
    .subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
      console.log(posts);
    })
  }

  onClearPosts(){
      return this.http.delete('https://apirest-8f705.firebaseio.com/posts.json')
      .subscribe(() => {
        this.loadedPosts = []
      })
  }  
}
