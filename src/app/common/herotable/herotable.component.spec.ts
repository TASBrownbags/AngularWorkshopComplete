import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerotableComponent } from './herotable.component';

describe('HerotableComponent', () => {
  let component: HerotableComponent;
  let fixture: ComponentFixture<HerotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
