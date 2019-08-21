import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { homepagecomponent } from './homepage.component';

describe('SessionpageComponent', () => {
  let component: homepagecomponent;
  let fixture: ComponentFixture<homepagecomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ homepagecomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(homepagecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
