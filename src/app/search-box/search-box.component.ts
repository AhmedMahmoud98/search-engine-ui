import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private router: Router) { }
  
  searchText: string;
  record: boolean = false;
  allOrImage: boolean;
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
    this.allOrImage = !this.router.url.includes('/images');
    });
  }

  
  recordEvent() 
  {
      this.record = !this.record;    
  }

  search( ):void {
    let url = '/search/';
    if(this.allOrImage)
      url += 'all';
    else
      url += 'images';
    this.router.navigate([url], {queryParams: { 'query':  this.searchText} });        
  }
}
