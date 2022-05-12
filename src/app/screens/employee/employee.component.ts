import { Component, OnInit } from '@angular/core';
import { ComsService } from 'src/app/components/coms/coms.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList = [];
  constructor(private loadingService: LoadingService, 
              private comms: ComsService,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadingService.openBlockingLoader('Retrieving all employees');
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res: any) => {
      this.employeeList = res.data;
      this.loadingService.closeBlockingLoader();
    }, error => {
      this.loadingService.closeBlockingLoader();
      this.comms.showMsg('Failed to retrieve all users')
    })
  }

  employeeAdded() {
    console.log('triggered on the home screen')
  }

}
