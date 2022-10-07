import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  urlLists: any = [];
  addUrl = '';
  addTimeOut = 0;
  id = 0;

  onSubmit(f: NgForm) {
    const formData = f.value;
    this.addUrl = formData.monitor_url;
    this.addTimeOut = formData.timeout;
    this.id = formData.id;
    this.apiService.addUrl(this.addUrl,this.addTimeOut)
    .subscribe((data)=>{
      console.log(data);
    });
    this.listUrls();
  }


  ngOnInit(): void {
    this.listUrls();
  }

  listUrls() {
    this.apiService.getUrlList().subscribe((data)=>{
      console.log(data);
      this.urlLists = data;
    });
  }

  editUrl() {

  }

  deleteUrl() {
    this.apiService.deleteUrl(this.id).subscribe((data)=>{
      console.log(data);
    })
  }

}
