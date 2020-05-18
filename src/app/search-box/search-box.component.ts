import { Component, OnInit, OnChanges } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  searchText: string;
  urlparam: string;
  allOrImage: boolean;
  
  ngOnInit(): void {
     this.route.queryParams.subscribe(
       params =>{ this.searchText = params['query']
        console.log(params["query"])
      });
      
    this.router.events.subscribe((event) => {
      this.allOrImage = this.router.url.includes('/images');
    });
  }

  
  search( ): void {
    let url = '/search/';
    if(this.allOrImage)
      url += 'images';
    else
      url += 'all';
    this.router.navigate([url], {queryParams: { 'query':  this.searchText} });        
  }
  
}
