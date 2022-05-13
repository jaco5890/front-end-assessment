import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empty-employees',
  templateUrl: './empty-employees.component.html',
  styleUrls: ['./empty-employees.component.scss']
})
export class EmptyEmployeesComponent implements OnInit {
  showAddEmployee = false;
  employee: null = null;
  @Output() employeeAdded = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.showAddEmployee = true;
  }

  addedEmployee() {
    this.employeeAdded.emit(true);
  }

}
