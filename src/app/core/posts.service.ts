import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }
  getPosts(): Observable<any[]> {
    /* exemple de typage de function */
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
