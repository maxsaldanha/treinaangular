import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})

export class ExamesComponent implements OnInit {
  item: any;
  panelOpenState = false;
  url = './assets/json/exames.json';

  constructor( public http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(Response => {
      this.item = Response
    })
  }  
}

