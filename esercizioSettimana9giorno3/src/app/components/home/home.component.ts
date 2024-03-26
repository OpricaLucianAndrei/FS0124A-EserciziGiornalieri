import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  post!: Post;
  posts: Post[] = [];
  tags: string[] = [];
  selectedTag!: string | null;

  @Input() edit: boolean = true;
  constructor(private postService: PostService) {
  }

   
   editPost(): void {
    let title = document.getElementById('inputTitolo')! as HTMLInputElement;
    let content = (<HTMLInputElement>document.getElementById('testPost')).value!;
    this.post.title = title.value;
    this.post.body = content;
    this.edit = false;
    }

    async ngOnInit(): Promise<void> {
      const posts = await this.postService.getPosts();
      this.posts = posts;
      console.log(this.posts);
      
      let index = Math.floor(Math.random() * this.posts.length);
      this.post = this.posts[index];
      this.tags = this.postService.getAllTags();
      console.log(this.tags); 
  }

  filterByTag(tag: string): void {
    this.posts = this.postService.filterPostsByTag(tag);
    this.selectedTag = tag;
  }
  
  resetFilter(): void {
    this.posts = this.postService.getPosts();
    this.selectedTag = null;
  }
}
