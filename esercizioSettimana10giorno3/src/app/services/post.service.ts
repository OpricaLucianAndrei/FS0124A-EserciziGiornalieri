import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem, Post } from '../models/post';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL: string =  'https://dummyjson.com/products';
  favoritesSub = new Subject<number>();
  favoritesCounter = 0;
  products: Post[] = [];
  favs: Post[] = [];
  cart: CartItem[] = []

  constructor(private http: HttpClient) { }

  getPosts() {
      return this.http
          .get<{ products: Post[] }>(this.apiURL)
          .pipe(map((Posts) => Posts.products)).pipe(
            catchError((error) => {
              console.error(error);
              return throwError(error);
            })
          );
  }

  createPost(newPost: Post) {
      return this.http.post<Post>(this.apiURL, newPost);
  }
  

  addToCart(prod: Post) {
    const found = this.cart.find(prd => prd.id === prod.id)
    if (found) {
      found!.amount += 1
      found.totalPrice = found.price * found.amount

    } else this.cart.push({ ...prod, amount: 1, totalPrice: prod.price })
  }
  removeFromCart(id: number) {
    const index = this.cart.findIndex(prd => prd.id === id)
    if(this.cart[index].amount === 1) {
      this.cart.splice(index, 1)
    } else {
      this.cart[index].amount--
      this.cart[index].totalPrice = this.cart[index].price * this.cart[index].amount
    }
  }
  get cartList() {
    return new Observable((obs: Observer<CartItem[]>) => {
      obs.next(this.cart)
    })
  }


  addToFavs(prod: Post) {
    const found = this.favs.find(prd => prd.id === prod.id)
    if (!found) {
      this.favs.push(prod)
    }
  }

  removeFromFav(id: number) {
    const index = this.favs.findIndex(el => el.id === id)
    this.favs.splice(index, 1)
  }

  get favList(){
    return new Observable((obs: Observer<Post[]>) => {
      obs.next(this.favs)
    })

  }

  isFav(id: number) {
    return this.favs.find(prd => prd.id === id)
  }

}
