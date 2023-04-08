import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-service',
  templateUrl: './observable-service.component.html',
  styleUrls: ['./observable-service.component.css'],
})
export class ObservableServiceComponent implements OnInit {
  orderStatus: any;
  MyObservable!: Observable<any>;
  MyObservable2!: Observable<any>;
  subScriptionNo: any;

  constructor() {
    this.MyObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Order Confirmed...');
      }, 1000);

      // Buzzuness........ Logic
      setTimeout(() => {
        observer.next('Order In-Progress......');
      }, 2000);

      // Buzzuness........ Logic
      setTimeout(() => {
        observer.next('Order Delevered  !!!! ');
      }, 3000);

      // Buzzuness........ Logic
      setTimeout(() => {
        observer.next(
          '1111111111111111111111111222222222222222222222233333333333333'
        );
      }, 4000);

      // Buzzuness........ Logic
      setTimeout(() => {
        observer.next('Order Delevered SuccessFully && PayMent Recieved !!!! ');
      }, 5000);
    });
    //! We can .subscribe to above Observable
    this.MyObservable.subscribe((data) => {
      this.orderStatus = data;
    });
    //! Single Observable can have multiple Subscriptions
    this.MyObservable.subscribe((data) => {
      this.subScriptionNo = '1St SubScription ........';
    });

    this.MyObservable.subscribe((data) => {
      this.subScriptionNo = '2nd  SubScription ........';
    });
  }
  mydata: any;
  getData() {
    this.MyObservable.subscribe((data) => {
      this.mydata = data;
    });
  }

  ngOnInit(): void {}
}
