import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SidenavDirective } from './sidenav.directive';
import { SidenavComponent } from './sidenav.component';
import { DebugElement } from '@angular/core';
import { LayoutService } from '../layout.service';
import { By } from '@angular/platform-browser';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let hostElement: DebugElement;
  let service: LayoutService = new LayoutService();
  let directive: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    hostElement = fixture.debugElement.query(By.css('div'));

    const directiveEl = fixture.debugElement.query(By.directive(SidenavDirective));
    directive = directiveEl.injector.get(SidenavDirective);
  });


  describe('given the sidenav expanded is false', () => {
    beforeEach(() => {
      service.expanded = false;
    });
    describe('when on mouseenter event is triggered', () => {

      it('then service expandedState should be set to true', () => {
        // arange
        const layoutStateUpdated = spyOn(service.sideNavState$, 'next');
        hostElement.triggerEventHandler('mouseenter', null);

        // act
        fixture.detectChanges();


        // assert
        expect(layoutStateUpdated).toHaveBeenCalledWith(true);
      });
    });

    describe('when on mouseleave event is triggered', () => {
      it('then service expandedState should be set to true', () => {
        // arange

        const layoutStateUpdated = spyOn(service.sideNavState$, 'next');

        // act
        hostElement.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();

        // assert
        expect(layoutStateUpdated).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('given the sidenav expanded is true', () => {
    beforeEach(() => {
      service.expanded = true;

    });
    describe('when on mouseleave event is triggered', () => {
      it('then layoutState should not be updated', () => {
        // arange

        const layoutStateUpdated = spyOn(service.sideNavState$, 'next');

        // act
        hostElement.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();

        // assert
        expect(layoutStateUpdated).not.toHaveBeenCalled();
      });
    });
    describe('when on mouseenter event is triggered', () => {
      it('then layoutState should not be updated', () => {
        // arange

        const layoutStateUpdated = spyOn(service.sideNavState$, 'next');

        // act
        hostElement.triggerEventHandler('mouseenter', null);
        fixture.detectChanges();

        // assert
        expect(layoutStateUpdated).not.toHaveBeenCalled();
      });
    });
  });
});
