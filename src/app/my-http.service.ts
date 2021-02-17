import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    const urlName = 'https://jsonplaceholder.typicode.com/photos';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(urlName, httpOptions);
  }

}
