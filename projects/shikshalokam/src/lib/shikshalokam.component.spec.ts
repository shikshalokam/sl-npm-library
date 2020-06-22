import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShikshalokamComponent } from './shikshalokam.component';

describe('ShikshalokamComponent', () => {
  let component: ShikshalokamComponent;
  let fixture: ComponentFixture<ShikshalokamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShikshalokamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShikshalokamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
