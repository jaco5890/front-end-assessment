import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let lsService: LayoutService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [HeaderModule, BrowserAnimationsModule, RouterTestingModule, MatDialogModule],
      providers: [MatDialog],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('sideNavState', () => {

    it('should be undefined on init ', () => {

      expect(component.sideNavChange).toBe(undefined);
    });

    it('should be true when sideNavButtonClicked method was called', () => {
      component.sideNavButtonClicked();

      expect(component.sideNavChange).toBe(true);
    });

    it('should be false when sideNavButton has been when subject was true', () => {
      component.sideNavChange = true;
      component.sideNavButtonClicked();
      expect(component.sideNavChange).toBe(false);
    });
  });

});
