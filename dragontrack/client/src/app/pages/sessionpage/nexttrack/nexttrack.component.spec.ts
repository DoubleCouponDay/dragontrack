import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexttrackComponent } from './nexttrack.component';

describe('NexttrackComponent', () => {
  let component: NexttrackComponent;
  let fixture: ComponentFixture<NexttrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NexttrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexttrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
