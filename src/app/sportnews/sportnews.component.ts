import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }
  sportsnewsDisplay:any = [];

  ngOnInit(): void {
    this._service.sportsnews().subscribe((result)=>{
      this.sportsnewsDisplay = result.articles;

    });
  }

}
