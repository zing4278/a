import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { EnterInfoComponent } from '../../_components/enter-info/enter-info.component'
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Post } from '../../post.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../../data.service'
import { title } from 'process';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {
  loadedPosts = {};
  isFetching = false;
  emp: any;
  i: any;
  postsArray: any;
  dataABC: { title: string; content: string; };
  // editUser: any;
  // emp: void;

  constructor(
    private _route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _dataService : DataService
  ) { }

  ngOnInit() {
    const title = this._route.snapshot.params['id'];
    this._route.paramMap.subscribe(userparams => {
      const title = userparams.get('title');
    //  this.editUsernew(title)
    })
    var b = title;
    
      this.fetchPost(title); 
      const need = this.fetchPost(title);
     // console.log(need)
     
  }

 
  // editUserInfo(){
  //   alert('editUserInfo')
  //   this.router.navigate(['editInfo'])
  //  }  

 
  
 
fetchPost(id: any) {
  alert('fetch')
    this.isFetching = true;
    this.http
    .get('https://apirest-8f705.firebaseio.com/posts.json')
    .pipe(
      map(responseData  => {
      const postsArray = [];
        for(const user in responseData){
          postsArray.push({ ...responseData[user], id: user});
        }
        postsArray;
        // 
        return postsArray.find(e => e.id === id); 
      })
    )
    .subscribe(posts => {
      this.loadedPosts = posts;
       this.isFetching = true;
      console.log(posts);
      const dataABC = posts;
      // dataABC.push(this.loadedPosts);
     
    }) 
}

// baseURL = 'https://apirest-8f705.firebaseio.com/posts.json';
// editUserInfo(postData) {
  
//     alert('editUserInfo')
//     // this.router.navigate(['editInfo'])
//   this.http
//     .put<void>(`${this.baseURL}/${this.loadedPosts}` ,postData )
//     .subscribe(responseData => {
//       console.log(responseData);
//     });
//     debugger;
// }

 editUsernew(id: any){
  
  this.router.navigate(['editInfo', this.postsArray.id])
  debugger;
  if(id === 0){
    this.postsArray = {
      title: null,
      content: null,
      id: null
    }
  
  }else{
    this.postsArray = this.fetchPost(id) 
  }
}


  baseURLi = 'https://apirest-8f705.firebaseio.com/posts.json'

  deletedataUser(){
    alert('del fun');
    this.fetchPost(title);
    
    
    debugger;
    // return this.http.delete<void>(`${this.baseURLi}${this.fetchPost}`)    
  }
  



  // baseURL = 'https://apirest-8f705.firebaseio.com/posts.json';
  // deleteUe(dataABC: any){ 
  //   debugger;
  //   // alert(deleteUe);
  //   // alert(this.dataABC);
    
  //   const i  = this._dataService.userid;
  //   console.log('i -' + i)
  //   console.log('URL' + this._dataService.userid)
  
  //   this.http.delete<void>(`${this.baseURL}/${this.i}`  ).subscribe(() => {
  //     console.log(`deleted + ${this.baseURL}/${this.i}`)
  //     // (err) => console.log(err)
  //   })
  
    // if (i != -1){
    //   this._dataService.splce(i, 1)
    // }
  // }
  

  // deleteUserInfo(title: string){
    // alert('deleteUserInfo')
    // this.router.navigate(['deleteInfo'])
        // return this.http.delete('https://apirest-8f705.firebaseio.com/posts.json')
    // .subscribe(() => {
    //   this.loadedPosts = []
    // })
    
  // }
  

}
