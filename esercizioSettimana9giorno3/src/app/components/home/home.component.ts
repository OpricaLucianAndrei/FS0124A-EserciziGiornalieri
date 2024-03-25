import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  post!: Post;
  posts!: Post[];
  @Input() edit: boolean = true;
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

   editPost(): void {
    let title = document.getElementById('inputTitolo')! as HTMLInputElement;
    let content = (<HTMLInputElement>document.getElementById('testPost')).value!;
    this.post.title = title.value;
    this.post.body = content;
    this.edit = false;
    }

}
