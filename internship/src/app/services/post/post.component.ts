import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from 'src/app/models/post';



@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addPostToDb(post: Post) {
    this.http
      .post(this.url + '/feed/post', {
        title: post.title,
        content: post.content,
      })
      .subscribe((postResponse) => {
        console.log(postResponse);
      });
  }

  getPosts() {
    return this.http.get(this.url + '/feed/posts').toPromise();
  }

  updatePostOnDb(post: Post) {
    this.http.put(this.url + '/feed/' + post.id, {
      title: post.title,
      content: post.content
    }).toPromise();
  }

  deletePostOnDb(post: Post) {
    const deleteUrl = this.url + '/feed/' + post.id;
    return this.http.delete(deleteUrl).toPromise();
  }
}
