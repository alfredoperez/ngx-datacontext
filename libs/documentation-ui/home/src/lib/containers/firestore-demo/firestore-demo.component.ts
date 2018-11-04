import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { Post } from '../../core/models/post.model';
import { DataContextService } from '../../core/services/datacontext.service';

@Component({
  selector: 'ngx-firestore-demo',
  templateUrl: './firestore-demo.component.html',
  styleUrls: ['./firestore-demo.component.scss']
})
export class FirestoreDemoComponent implements OnInit {
  posts$: Observable<Array<Post>>;

  constructor(private datacontext: DataContextService) { }

  ngOnInit() {
    this.posts$ = this.datacontext.posts.getAll();
  }

  addPost() {
    const newPost = new Post();
    newPost.title = faker.commerce.productName();
    newPost.content = faker.hacker.phrase();
    newPost.createdBy = `${faker.name.firstName()} ${faker.name.lastName()}`;
    newPost.createdOn = faker.date.past();
    this.datacontext.posts.create(newPost);
  }

  deletePost(post: Post) {
    this.datacontext.posts.remove(post);
  }
  updatePost(post: Post) {
    post.createdOn = faker.date.past();
    post.content = faker.hacker.phrase();
    this.datacontext.posts.update(post);
  }
  addComment() {

  }
  updateComment() {

  }
  deleteComment() {

  }
}
