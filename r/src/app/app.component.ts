import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { map} from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  DataService: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    //Send Http request
    this.http
      .post(
        // 'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
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

  private fetchPosts(){
    this.isFetching = true;
    this.http
    .get('https://apirest-8f705.firebaseio.com/posts.json')
    .pipe(
      map(responseData  => {
      const postsArray = [];
        for(const key in responseData){
          if (responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id: key})
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
