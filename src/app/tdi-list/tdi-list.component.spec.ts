import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdiListComponent } from './tdi-list.component';

describe('TdiListComponent', () => {
  let component: TdiListComponent;
  let fixture: ComponentFixture<TdiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
