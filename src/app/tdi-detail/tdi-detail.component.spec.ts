import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdiDetailComponent } from './tdi-detail.component';

describe('TdiDetailComponent', () => {
  let component: TdiDetailComponent;
  let fixture: ComponentFixture<TdiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
