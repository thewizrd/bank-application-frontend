import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableDisableCustomerComponent } from './enable-disable-customer.component';

describe('EnableDisableCustomerComponent', () => {
  let component: EnableDisableCustomerComponent;
  let fixture: ComponentFixture<EnableDisableCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableDisableCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableDisableCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
