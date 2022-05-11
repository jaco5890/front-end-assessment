import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyEmployeesComponent } from './empty-employees.component';


describe('EmpytEmployeesComponent', () => {
  let component: EmptyEmployeesComponent;
  let fixture: ComponentFixture<EmptyEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
