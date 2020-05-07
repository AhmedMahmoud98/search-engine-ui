import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsTextComponent } from './search-results-text.component';

describe('SearchResultsTextComponent', () => {
  let component: SearchResultsTextComponent;
  let fixture: ComponentFixture<SearchResultsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
