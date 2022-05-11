import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComsComponent } from './coms.component';

describe('ComsComponent', () => {
  let component: ComsComponent;
  let fixture: ComponentFixture<ComsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
