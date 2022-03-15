import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MismatchedComponent } from './mismatched.component';

describe('MismatchedComponent', () => {
  let component: MismatchedComponent;
  let fixture: ComponentFixture<MismatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MismatchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MismatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
