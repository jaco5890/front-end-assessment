import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockingComponent } from './blocking.component';

describe('BlockingComponent', () => {
  let component: BlockingComponent;
  let fixture: ComponentFixture<BlockingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
