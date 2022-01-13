
import { Component, OnInit } from '@angular/core';
import Post from 'src/app/models/post';

import { PostService } from 'src/app/services/post/post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post = new Post();
  posts: Post[] = [];
  editing: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  async addPost() {
    await this.postService.addPostToDb(this.post);
    this.posts.push(this.post);
    this.post = new Post();
  }

  async fetchPosts() {
    this.posts = [];

    let res: any = await this.postService.getPosts();

    for (let i = 0; i < res.posts.length; i++) {
      const post = new Post();
      
      post.id = res.posts[i]._id;
      post.title = res.posts[i].title;
      post.content = res.posts[i].content;
      post.createdAt = res.posts[i].createdAt;
      post.updatedAt = res.posts[i].updatedAt;

      this.posts.push(post);
    }
  }

 editPost(post: Post) {
    this.editing = true;
    this.post = post;
  }

  async updatePost() {
    await this.postService.updatePostOnDb(this.post);
    this.post = new Post();
    this.editing = false;
  }

  async deletePost(post: Post) {
    await this.postService.deletePostOnDb(post);
    this.posts = this.posts.filter((x) => x.id != post.id);
  }
}