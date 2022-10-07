import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList : any = [];
  urlLists : any = [];
  name = '';
  email = '';
  password = '';
  constructor(private apiService: ApiService) { }

  onSubmit(fo: NgForm) {
    console.log(fo.value);
    this.listUrls();
    this.addUser(fo.value);
  }

  ngOnInit(): void {
  }

  listUsers() {
    this.apiService.getUserList().subscribe((data) =>{
      this.userList = data;
    })
  }

  listUrls() {
    this.apiService.getUrlList().subscribe((data)=>{
      console.log(data);
      this.urlLists = data;
    });
  }

  addUser(data: any) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    const response = this.apiService.createUser(this.name, this.email, this.password).subscribe((data)=>{
      console.log(data);
    });
    console.log(response);
  }

}
