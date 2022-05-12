import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComsModule } from 'src/app/components/coms/coms.module';
import { ComsService } from 'src/app/components/coms/coms.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  showAddEmployee = false;
  @Output() employeeAdded = new EventEmitter<boolean>();
  @Input() employeeList : any;
  employee: null = null;
  filterList = ['name', 'last name', 'cellphone'];
  selectedFilter: any;

  constructor(private loadingService: LoadingService, 
    private employeeService: EmployeeService, 
    private comms: ComsService) { }

  ngOnInit(): void {
  }

  deleteEmployee(id){
    this.loadingService.openBlockingLoader("Deleting employee");
    this.employeeService.deleteEmployee(id).subscribe((res: any) => {
      this.comms.showMsg("User deleted successfully");
      this.loadingService.closeBlockingLoader();
    },error => {
      this.comms.showMsg("Failed to delete user");
      this.loadingService.closeBlockingLoader();
    })
  }

  editEmployee(employee) {
    this.showAddEmployee = true;
    this.employee = employee;
  }

  addEmployee(){
    this.employee = null;
    this.showAddEmployee = true;
  }

  addedEmployee() {

  }

}
