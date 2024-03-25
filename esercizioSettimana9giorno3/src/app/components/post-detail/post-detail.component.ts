import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})


export class PostDetailComponent implements OnInit {
  postId!: string;
  post!: Post;
  

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
  }
  ngOnInit(): void {
    fetch('../../assets/db.json')
      .then(response => response.json())
      .then(posts => {
        this.post = posts.find((post: Post) => post.id === Number(this.postId));
      })
      .catch(error => console.error('Errore nel caricamento dei dati:', error));
  }
  


}



