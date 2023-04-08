import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ShowIconInterceptor } from '../show-icon.interceptor';

@Component({
  selector: 'app-intercepter',
  templateUrl: './intercepter.component.html',
  styleUrls: ['./intercepter.component.css']
})
export class IntercepterComponent {
  myInput:any;
  name:string="Sidhu"
  constructor()
  {

  }
}
