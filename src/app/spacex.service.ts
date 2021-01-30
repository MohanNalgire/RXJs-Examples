import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface queryParams {
  limit?: number;
  offset?: number;
  launch_success?: boolean;
  land_success?: boolean;
  launch_year?: number;
}
@Injectable({ providedIn: 'root' })
export class SpacexService {
  baseURL = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) {}

  getSpacexLaunches() {
    const spacexURL = `${this.baseURL}/launches`;
    let params = new HttpParams();
    // default query paramters
    params = params.append('limit', '100');
    params = params.append('offset', '0');

    return this.http.get(spacexURL, { params: params });
  }
}
