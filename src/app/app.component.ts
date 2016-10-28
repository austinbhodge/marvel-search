
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search : string;
  heroList : any;
  publicKey : string ='apikey=39b85aef167d9fb86cdeb2a7736a8e45';
  loading : boolean = false;
  error : boolean = false;

  constructor(private http: Http) { }

  apiRequest() {
    let request = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + this.search + '&' + this.publicKey;
    return this.http.get(request)
      .map(this.extractData)
      .catch(this.handleError);
  }


  loadHeros() {
    this.loading = true;
    this.apiRequest().subscribe(
      res => {this.heroList = res.data.results; console.log(res); this.loading = false},
      error => {this.error = true; this.loading = false}
    )
  }


  private extractData(res: Response) {
    let body;
    if (res.text()) {
      body = res.json();
    }
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
