import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() userLocation: string;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }
 
  searchText: string;
  urlparam: string;
  allOrImage: boolean;
  searches:String[];
  suggestionIndex: number = -1;
  
  ngOnInit(): void {
     this.route.queryParams.subscribe(
       params =>{ this.searchText = params['query']
      });
      
    this.router.events.subscribe((event) => {
      this.allOrImage = this.router.url.includes('/images');
    });
  }

  search(){
    console.log("Hello");
    let url = '/search/';
    if(this.allOrImage)
      url += 'images';
    else
      url += 'all';
    this.router.navigate([url], {queryParams: {'query':  this.searchText, 'country': this.userLocation} });
  }

  newSearch(event) {
    if(event.key === "Enter") {
      if(this.searches != null && this.suggestionIndex < this.searches.length - 1 &&  this.suggestionIndex > 0)
        this.pickSuggestion(this.searches[this.suggestionIndex]);
      else
        this.search();
    }
    else if(event.type === "click")
      this.search();

    if(this.searchText){
      this.data.getAutoComplete(this.searchText).subscribe(
        list =>  {this.searches = list} 
      );
    }
  }

  pickSuggestion(suggestion){
      this.searchText = suggestion;
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
