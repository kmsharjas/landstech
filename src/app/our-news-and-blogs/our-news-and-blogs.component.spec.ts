import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsAndBlogsComponent } from './our-news-and-blogs.component';

describe('OurNewsAndBlogsComponent', () => {
  let component: OurNewsAndBlogsComponent;
  let fixture: ComponentFixture<OurNewsAndBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurNewsAndBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewsAndBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
