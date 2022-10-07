import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000';
  getUrlList() {
    return this.httpClient.get(this.baseUrl + '/api/url/list');
  }

  addUrl(url: string, timeout: number) {
    const payload = {
      "url":url,
      "timeout":timeout,
    }
  return this.httpClient.post(this.baseUrl + '/api/url/add' , payload);
  }

  deleteUrl(id: number) {
    return this.httpClient.delete(this.baseUrl + '/api/url/del/id');
  }

  getUserList() {
    return this.httpClient.get(this.baseUrl + '/api/user/list');
  }

  createUser(name:string, email: string, password: string) {
    const payload = {
      "name" : name,
      "email" : email,
      "password" : password
    }
    return this.httpClient.post(this.baseUrl + '/api/user/create' , payload);
  }
}
