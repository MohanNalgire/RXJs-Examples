import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  todosPage = '/todos/';
  postsPage = '/posts';
  commentsPage = '/comments';
  albumsPage = '/albums';
  photosPage = '/photos';
  userssPage = '/users';
  todos: Object;

  constructor(private http: HttpClient) {
    let url = `${this.baseUrl}${this.todosPage}`;
    this.http
      .get(url)
      .pipe(retry(2))
      .subscribe((todos) => (this.todos = todos));
  }

  ngOnInit(): void {}
}
