import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  post!: Post;
  posts!: Post[];

  constructor() {
      this.evidencePost();
  }

  async evidencePost() {
      const response = await fetch('../../assets/db.json');
      const data = await response.json();
      this.posts = data;
      let index = Math.floor(Math.random() * this.posts.length);
      this.post = this.posts[index];
  }
}
