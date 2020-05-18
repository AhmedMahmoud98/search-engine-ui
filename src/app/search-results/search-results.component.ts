import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  
  search: string ;

  constructor(private route: ActivatedRoute ,private router: Router) {
    
   } ;
    
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => this.search = params['query']);
    this.search = this.route.snapshot.queryParamMap.get('query');
    
  }

}
