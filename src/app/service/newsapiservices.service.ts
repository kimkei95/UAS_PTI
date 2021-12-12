import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a03d3c3f493d43d4873969c15b6fbec6";
  
  // technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a03d3c3f493d43d4873969c15b6fbec6"

  //businessapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a03d3c3f493d43d4873969c15b6fbec6"

  //businessapiurl
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a03d3c3f493d43d4873969c15b6fbec6"

  //businessapiurl
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=a03d3c3f493d43d4873969c15b6fbec6"


  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //technology()
  technews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //business()
  businessnews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

  //sports()
  sportsnews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }

  //business()
  healthnews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }







}
