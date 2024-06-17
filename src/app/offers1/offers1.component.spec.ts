import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offers1Component } from './offers1.component';

describe('Offers1Component', () => {
  let component: Offers1Component;
  let fixture: ComponentFixture<Offers1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Offers1Component]
    });
    fixture = TestBed.createComponent(Offers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
