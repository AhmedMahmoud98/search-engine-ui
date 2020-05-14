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
  
  ngOnInit(): void {
  }

  
  recordEvent() 
  {
      this.record = !this.record;    
  }

  search( ):void {
    this.router.navigate(['/search', this.searchText]);        
  }
}
