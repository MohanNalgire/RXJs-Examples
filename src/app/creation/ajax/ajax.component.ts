import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, tap } from 'rxjs/operators';
@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
})
export class AjaxComponent implements OnInit {
  apiResponse: any;
  url = `https://jsonplaceholder.typicode.com/users`;
  apiGetJSON: unknown;
  constructor() {}

  ngOnInit(): void {
    this.getDataFromApi();
    this.getApiResponseAsJson();
  }

  getDataFromApi() {
    const ajaxConfig = ajax({
      url: this.url,
      method: 'GET',
    });

    const apiCall$ = ajaxConfig.pipe(
      tap(() => console.log('check on data')),
      catchError((error) => of(error))
    );

    apiCall$.subscribe(
      (data) => {
        console.log(console.log('api call data', data));
        this.apiResponse = data;
      },
      (error) => console.error('api call error:', error)
    );
  }

  getApiResponseAsJson() {
    const apiConf = ajax.getJSON(this.url);
    const apiCall$ = apiConf.pipe();
    apiCall$.subscribe(
      (data) => {
        console.log('getApiResponseAsJson -- data', data);
        this.apiGetJSON = data;
      },
      (error) => console.error('getApiResponseAsJson--', error)
    );
  }
}
