import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavListingComponent } from './sidenav-listing.component';

describe('SideNavListingComponent', () => {
  let component: SideNavListingComponent;
  let fixture: ComponentFixture<SideNavListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
