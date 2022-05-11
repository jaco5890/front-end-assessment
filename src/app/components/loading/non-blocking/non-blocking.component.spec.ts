import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NonBlockingComponent } from './non-blocking.component';

describe('NonBlockingComponent', () => {
  let component: NonBlockingComponent;
  let fixture: ComponentFixture<NonBlockingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NonBlockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonBlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
