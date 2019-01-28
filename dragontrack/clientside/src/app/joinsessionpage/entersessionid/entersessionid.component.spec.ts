import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntersessionidComponent } from './entersessionid.component';

describe('EntersessionidComponent', () => {
  let component: EntersessionidComponent;
  let fixture: ComponentFixture<EntersessionidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntersessionidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntersessionidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
