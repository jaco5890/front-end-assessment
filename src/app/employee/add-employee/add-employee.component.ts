import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @Input() title : string;
  @Output() closed = new EventEmitter();
  @Output() employeeAdded = new EventEmitter<boolean>();
  @Input() employee : any;
  employeeForm: FormGroup;
  selectedIndex: number = 0;
  maxNumberOfTabs = 3;
  skillsArray = [{
    skill: '',
    yearsExperience: '',
    seniorityRating: ''
  }];
  seniorityArray = ['Junior', 'Intermediate', 'Senior']

  constructor(private readonly fb: FormBuilder) { }

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

    this.addSkill();
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
    console.log(employeeObject, 'object')
    //this.employeeAdded.emit(true);
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

  addSkill() {
    const lessonForm = this.fb.group({
      skill: ['', Validators.required],
      yearsExperience: ['', Validators.required],
      seniority: ['', Validators.required],
  });

   this.skills.push(lessonForm)
  }

  removeSkill(lessonIndex: number) {
    this.skills.removeAt(lessonIndex);
  }

}
