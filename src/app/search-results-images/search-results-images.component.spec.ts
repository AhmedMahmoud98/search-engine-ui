import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsImagesComponent } from './search-results-images.component';

describe('SearchResultsImagesComponent', () => {
  let component: SearchResultsImagesComponent;
  let fixture: ComponentFixture<SearchResultsImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
