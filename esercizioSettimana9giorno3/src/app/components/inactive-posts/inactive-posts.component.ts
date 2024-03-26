import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  post!: Post;
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  async ngOnInit(): Promise<void> {
    const posts = await this.postService.getPosts();
    this.posts = posts;
    const tags = this.postService.getAllTags();
    console.log(tags);
}

  
}
