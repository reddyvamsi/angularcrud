import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductsComponent } from './viewallproducts.component';

describe('ViewallproductsComponent', () => {
  let component: ViewallproductsComponent;
  let fixture: ComponentFixture<ViewallproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallproductsComponent]
    });
    fixture = TestBed.createComponent(ViewallproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
