import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComsService } from 'src/app/components/coms/coms.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { RootStoreState } from 'src/app/root-store';
import { CreateEmployee, UpdateEmployee } from 'src/app/root-store/main-store/actions/employee.actions';
import { createEmployeeError, createEmployeeLoading, createEmployeeSuccess, updateEmployeeError, updateEmployeeLoading, updateEmployeeSuccess } from 'src/app/root-store/main-store/selectors/employee.selector';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  @Input() title : string;
  @Output() closed = new EventEmitter();
  @Output() employeeAdded = new EventEmitter<boolean>();
  @Input() employee : any;
  employeeForm: FormGroup;
  selectedIndex: number = 0;
  maxNumberOfTabs = 3;
  seniorityArray = ['Junior', 'Intermediate', 'Senior'];

  newEmployeeLoading$: Observable<any> = this.store.select(createEmployeeLoading);
  newEmployeeError$: Observable<any> = this.store.select(createEmployeeError);
  updateEmployeeLoading$: Observable<any> = this.store.select(updateEmployeeLoading);
  updateEmployeeError$: Observable<any> = this.store.select(updateEmployeeError);

  constructor(private readonly fb: FormBuilder,
    private store: Store<RootStoreState.RootState>, 
    private comms: ComsService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      basicInformation: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        contactNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthday: ['', Validators.required],
      }),
      addressInformation: this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      skills: this.fb.array([])
    });

    if(this.employee === null) {
      this.addSkill();
      this.title = 'Add ';
    }else {
      this.populateFields();
      this.title = 'Edit '
    }
  }

  populateFields() {
    this.employeeForm.controls.basicInformation.patchValue({firstName: this.employee.basicInformation.firstName})
    this.employeeForm.controls.basicInformation.patchValue({lastName: this.employee.basicInformation.lastName})
    this.employeeForm.controls.basicInformation.patchValue({contactNumber: this.employee.basicInformation.contactNumber})
    this.employeeForm.controls.basicInformation.patchValue({email: this.employee.basicInformation.email})
    this.employeeForm.controls.basicInformation.patchValue({birthday: this.employee.basicInformation.birthday})

    this.employeeForm.controls.addressInformation.patchValue({streetAddress: this.employee.addressInformation.streetAddress})
    this.employeeForm.controls.addressInformation.patchValue({city: this.employee.addressInformation.city})
    this.employeeForm.controls.addressInformation.patchValue({postalCode: this.employee.addressInformation.postalCode})
    this.employeeForm.controls.addressInformation.patchValue({country: this.employee.addressInformation.country})

    for(let skill of this.employee.skills){
      this.addSkill(skill)
    }
  }

  get skills() {
    return this.employeeForm.controls['skills'] as FormArray;
  }

  closeDialog() {
    this.closed.emit(false);
  }

  saveEmployee() {
    let employeeObject = {
      basicInformation: this.employeeForm.value.basicInformation,
      addressInformation: this.employeeForm.value.addressInformation,
      skills: this.employeeForm.value.skills
    }
    if(this.title === 'Add '){
      this.addEmployee(employeeObject);
    }else {
      this.updateEmployee(employeeObject);
    }
  }

  addEmployee(employeeObject){
    this.store
    .select(createEmployeeSuccess)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((employee) => {
      if (employee) {
        this.comms.showMsg("Employee added");
        this.employeeAdded.emit(true);
        this.closed.emit(false);
      }
    });

    this.store
    .select(createEmployeeError)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((error) => {
      if (error) {
        this.comms.showMsg('Failed to add employee');
      }
    });
   this.store.dispatch(new CreateEmployee(employeeObject));
  }

  updateEmployee(employeeObject){
    this.store
    .select(updateEmployeeSuccess)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((employee) => {
      if (employee) {
        this.comms.showMsg("Employee updated");
        this.employeeAdded.emit(true);
        this.closed.emit(false);
      }
    });

    this.store
    .select(updateEmployeeError)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((error) => {
      if (error) {
        this.comms.showMsg("Failed to update employee");
      }
    });
   this.store.dispatch(new UpdateEmployee(employeeObject, this.employee._id));
  }

  nextStep() {
    if (this.selectedIndex != this.maxNumberOfTabs) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }

  addSkill(skill?) {
    const lessonForm = this.fb.group({
      skill: [skill?.skill ? skill.skill : '', Validators.required],
      yearsExperience: [skill?.yearsExperience ? skill.yearsExperience : '', Validators.required],
      seniority: [skill?.seniority ? skill.seniority : '', Validators.required],
  });

   this.skills.push(lessonForm)
  }

  removeSkill(lessonIndex: number) {
    this.skills.removeAt(lessonIndex);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
