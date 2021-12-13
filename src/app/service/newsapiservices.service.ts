import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c02b1d127e48c6bd6c7d330d6cae1e";
  
  // technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f7c02b1d127e48c6bd6c7d330d6cae1e"

  //businessapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f7c02b1d127e48c6bd6c7d330d6cae1e"

  //businessapiurl
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f7c02b1d127e48c6bd6c7d330d6cae1e"

  //businessapiurl
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f7c02b1d127e48c6bd6c7d330d6cae1e"


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
