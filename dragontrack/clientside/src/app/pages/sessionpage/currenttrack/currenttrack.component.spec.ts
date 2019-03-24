import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrackComponent } from './currenttrack.component';

describe('CurrenttrackComponent', () => {
  let component: CurrenttrackComponent;
  let fixture: ComponentFixture<CurrenttrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenttrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
