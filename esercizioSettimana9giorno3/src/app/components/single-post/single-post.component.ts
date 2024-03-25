import { Component, Input } from '@angular/core';
import { Post } from "../../models/post";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  @Input() post!: Post;
  edit: boolean = false;

  toggleEdit(): void {
    this.edit = !this.edit;
  }
}
