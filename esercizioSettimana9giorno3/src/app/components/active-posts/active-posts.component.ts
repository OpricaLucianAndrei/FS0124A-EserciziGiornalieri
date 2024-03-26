import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  post!: Post;
  posts: Post[] = [];
 
  

 constructor(private postService: PostService) {
  }
  async ngOnInit(): Promise<void> {
    const posts = await this.postService.getPosts();
    this.posts = posts;
}
}
