import { Component, OnInit, OnChanges } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }
  
  searchText: string;
  urlparam: string;
  allOrImage: boolean;
  searches:String[];
  
  ngOnInit(): void {
     this.route.queryParams.subscribe(
       params =>{ this.searchText = params['query']
        console.log(params["query"])
      });
      
    this.router.events.subscribe((event) => {
      this.allOrImage = this.router.url.includes('/images');
    });
  }

  
  
  search(){
    let url = '/search/';
      if(this.allOrImage)
        url += 'images';
      else
        url += 'all';
      this.router.navigate([url], {queryParams: { 'query':  this.searchText} });
  }

  newSearch(event) {
    if(event.key === "Enter") {
      this.search();
    }
    if(this.searchText){
      this.data.getAutoComplete(this.searchText).subscribe(
        list =>  {this.searches = list
                console.log(list)} 
      );
    }
  }

  pickSuggestion(suggestion){
      this.searchText = suggestion;
  }
}
