import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerBycategoryComponent } from './career-bycategory.component';

describe('CareerBycategoryComponent', () => {
  let component: CareerBycategoryComponent;
  let fixture: ComponentFixture<CareerBycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerBycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerBycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
