import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList = [];
  constructor() { }

  ngOnInit(): void {
  }

  employeeAdded() {
    console.log('triggered on the home screen')
  }

}
