import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsHistogramComponent } from './trends-histogram.component';

describe('TrendsHistogramComponent', () => {
  let component: TrendsHistogramComponent;
  let fixture: ComponentFixture<TrendsHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsHistogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
