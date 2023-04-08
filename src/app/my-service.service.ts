import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private http: HttpClient) {}
  //* JSON Headers
  forJSONHeaders() {
    const httpHeader = new HttpHeaders({
      //    Key   :       Value Pair
      'content-type': 'application/json',
      Authorization: 'Siddhu@123***',
    });
  }

  getHttpClient() {
    //* this Header is mostly used in - if user is logged in - then rederect to the Dashbord
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'Siddhu@123***',
      totalTime: '3000', //this is any key value
    });
    //    Key   ,       Value Pair
    httpHeader = httpHeader.set('new-header-value', '[1,20,20,20,50,60]');
    httpHeader = httpHeader.set('setMethod', 'set-value'); //1) : A clone of the HTTP headers object with the newly set header value.
    httpHeader = httpHeader.set('totalTime', '2000'); //1)
    httpHeader = httpHeader.append('appendName', 'append-value'); //2) append name & value

    let time = httpHeader.get('totalTime'); //3) pass the name /key
    let getAllValues = httpHeader.getAll(`Authorization`); //4)  A string of values if the header exists, null otherwise.
    console.log(httpHeader.delete('totalTime'))


    console.log(getAllValues);

    if (time == '3000') {
      httpHeader = httpHeader.set('Authorization', 'null-0=any value');
    }

    let val = httpHeader.has('totalTime'); //The header name to check for existence. {name == key}
    // this method returns Boolean Value

    if(val)
    {
      // alert(val);
    }

    return this.http.get('http://localhost:3000/myInfo', {
      headers: httpHeader,
    });
  }

  createPost(createResource: any) {
    let httpHeader = new HttpHeaders();
    httpHeader.append('content-type', 'application/json');
    //! Above Two Line Meaning Don't Know...........

    let httpParams = new HttpParams({
      fromObject : {
         id:'1'

      }
    })

    return this.http.post('http://localhost:3000/myInfo', createResource, {params: httpParams});
  }
}
