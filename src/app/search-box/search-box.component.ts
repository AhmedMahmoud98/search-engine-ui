import { Component, OnInit, OnChanges } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

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
  suggestionIndex: number = -1;
  
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
    this.data.getAutoComplete(this.searchText).subscribe(
      list =>  {this.searches = list
                console.log(list)} 
    );
  }

  pickSuggestion(suggestion){
    let url = '/search/';
      if(this.allOrImage)
        url += 'images';
      else
        url += 'all';
      this.router.navigate([url], {queryParams: { 'query':  suggestion} });
  }

  focusInput(suggestionIndex) {
    var elementId = suggestionIndex.toString();
    var modal = document.getElementById(elementId);
    modal.classList.add('list-group-item-active');
  }
  
  unFocusInput(suggestionIndex) {
    var elementId = suggestionIndex.toString();
    var modal = document.getElementById(elementId);
    if(modal != null)
      modal.classList.remove('list-group-item-active');
  }

  shiftFocusDown() {
    if(this.suggestionIndex < this.searches.length - 1)
    {
      this.unFocusInput(this.suggestionIndex);
      this.suggestionIndex++;
      this.focusInput(this.suggestionIndex);
    }
  }
  
  shiftFocusUp() {
    if(this.suggestionIndex > 0)
    {
      this.unFocusInput(this.suggestionIndex);
      this.suggestionIndex--;
      this.focusInput(this.suggestionIndex);
    }
  }
}
