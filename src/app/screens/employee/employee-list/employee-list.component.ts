import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  showAddEmployee = false;
  @Output() employeeAdded = new EventEmitter<boolean>();
  filterList = ['name', 'last name', 'cellphone'];
  selectedFilter: any;
  employeeList = [{
    firstName: 'jaco',
    lastName: 'vd merwe',
    cellphone: '0748904346'
  },{
    firstName: 'jaco',
    lastName: 'vd merwe',
    cellphone: '0748904346'
  },{
    firstName: 'jaco',
    lastName: 'vd merwe',
    cellphone: '0748904346'
  },{
    firstName: 'jaco',
    lastName: 'vd merwe',
    cellphone: '0748904346'
  },{
    firstName: 'jaco',
    lastName: 'vd merwe',
    cellphone: '0748904346'
  }]
  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.showAddEmployee = true;
  }

  addedEmployee() {

  }

}
