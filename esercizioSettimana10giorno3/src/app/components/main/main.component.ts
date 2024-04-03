import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Post[] = [];
  product!: Post;
  sub!: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    
    });
}

addToCart(prd:Post) {
  this.postService.addToCart(prd);
}


 
addToFavs(prd: Post) {
  this.postService.addToFavs(prd);
  const btnFavorite = event!.target as HTMLElement;
  btnFavorite.classList.remove('btnLike');
  btnFavorite.classList.add('btnLikePremuto');
}

isFav(id:number) {
 return this.postService.isFav(id)
}


}
