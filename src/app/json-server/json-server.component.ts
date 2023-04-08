import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-json-server',
  templateUrl: './json-server.component.html',
  styleUrls: ['./json-server.component.css'],
})
export class JsonServerComponent {
  studentArray: any;
  constructor(
    public http: HttpClient,
    public myServiceService: MyServiceService
  ) {
    let url = 'http://localhost:3000/myInfo';

    this.myServiceService.getHttpClient().subscribe((data) => {
      this.studentArray = data;
      console.log(data);
    });

    this.http.get('http://localhost:3000/myInfo?id=2&name=Gomu').subscribe(data=>{
      // Params Query URL
      console.log(data);
    })


    let httpParams = new HttpParams({
      fromObject : {
         id:['1','2'],
         name:'Gomu'
      }
    })
    this.http.get('http://localhost:3000/myInfo', {params:httpParams}).subscribe(data=>{
      // Params in Constructor
      console.log(data);
    })
  }

  
  numArray: any;
  update() {
    let url = 'http://localhost:3000/myNum/5';
    this.http.put(url, { Hi: 'Sandesh and SiddheshWar' }).subscribe((data1) => {
      this.numArray = data1;
    });

    this.http
      .patch(url, { Hi: 'Ajay Shinde', Hello: 'Sandesh and SiddheshWar' })
      .subscribe((data: any) => {
        this.numArray = data;
      });

    let url1 = 'http://localhost:3000/myNum';
    this.http.get(url1).subscribe((data) => {});
  }

  POST_Method() {
    this.myServiceService
      .createPost({ id: 0, name: 'SSSName ' }).subscribe((data) => {
        alert(data);
      });
  }
}
