import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackcomponentComponent } from './trackcomponent.component';

describe('TrackcomponentComponent', () => {
  let component: TrackcomponentComponent;
  let fixture: ComponentFixture<TrackcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
