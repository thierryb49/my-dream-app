import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;
  constructor(private postsservice: PostsService) { }

  ngOnInit() {
    this.postsservice.getPosts().subscribe( (data) => {
      this.posts = data;
    });
  }

}
