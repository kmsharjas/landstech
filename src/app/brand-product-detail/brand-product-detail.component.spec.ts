import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandProductDetailComponent } from './brand-product-detail.component';

describe('BrandProductDetailComponent', () => {
  let component: BrandProductDetailComponent;
  let fixture: ComponentFixture<BrandProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
