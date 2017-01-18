import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class HTTPService{
  constructor(private http:Http){}

  getJsonProduct(){

    let requestOption: RequestOptions;
    let myHeaders    : Headers = new Headers();
    myHeaders.append('Content-type', 'application/json');
    myHeaders.append('Accept', 'application/json');

    requestOption = new RequestOptions({headers: myHeaders});

    return this.http.get("http://127.0.0.1:8000/rakitpc/api/Barang/?format=json", requestOption)
    .toPromise().then(res=>res.json());
  }

  getJsonDetailProduct(selectProduct){

    let requestOption: RequestOptions;
    let myHeaders    : Headers = new Headers();
    myHeaders.append('Content-type', 'application/json');
    myHeaders.append('Accept', 'application/json');
    let params = new URLSearchParams();
    params.set('id_barang',selectProduct)

    requestOption = new RequestOptions({headers: myHeaders , search: params});

    return this.http.get("http://127.0.0.1:8000/rakitpc/api/Barang/?format=json", requestOption)
    .toPromise().then(res=>res.json());
  }
  
}