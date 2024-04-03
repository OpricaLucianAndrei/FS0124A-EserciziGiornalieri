import { Component, Input , OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  @Input() product!: Post;
  favs!: Post[]
  constructor(public postservice : PostService) {}

  ngOnInit(): void {
    this.postservice.favList.subscribe((favs:Post[]) => {
      this.favs = favs
    })
  }
  removeFromFav(id:number) {
    this.postservice.removeFromFav(id);
  }
}
