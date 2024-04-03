import { Component, OnInit } from '@angular/core';
import { CartItem, Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = []
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.cartList.subscribe((cart) => {
      this.cart = cart
    })
  }
  removeFromCart(id: number) {
    this.postService.removeFromCart(id)
  }
  get totalPrice() {
    return this.cart.reduce((acc, prd) => acc + prd.totalPrice, 0)
  }

}
