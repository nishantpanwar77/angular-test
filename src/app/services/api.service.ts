import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientDataInterface } from '../interfaces/cient_data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  getDataList(){
    return this.http.get<ClientDataInterface>('https://jsonplaceholder.typicode.com/users');
  }

}
