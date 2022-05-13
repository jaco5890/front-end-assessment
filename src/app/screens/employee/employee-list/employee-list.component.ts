import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComsModule } from 'src/app/components/coms/coms.module';
import { ComsService } from 'src/app/components/coms/coms.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { RootStoreState } from 'src/app/root-store';
import { getEmployeeList } from 'src/app/root-store/main-store/selectors/employee.selector';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild('table') table: MatTable<any>;
  @Output() employeeAdded = new EventEmitter<boolean>();
  @Input() employeeList : any;
  showAddEmployee = false;
  employee: null = null;
  filterList = ['name', 'last name', 'cellphone'];
  selectedFilter: any;
  searchTerm: any;
  displayedColumns: string[] = [
    "index",
    "id",
    "name",
    "surname",
    "cellphone",
    "actions",
  ];
  dataSource = new MatTableDataSource();
  private ngUnsubscribe = new Subject();

  constructor(private loadingService: LoadingService, 
    private employeeService: EmployeeService, 
    private comms: ComsService,
    private store: Store<RootStoreState.RootState>) {
    }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.filterPredicate = (data: any, filter: string) => !filter || data.basicInformation.firstName.includes(filter) 
    || data.basicInformation.lastName.includes(filter);
  }

  deleteEmployee(id){
    this.loadingService.openBlockingLoader("Deleting employee");
    this.employeeService.deleteEmployee(id).subscribe((res: any) => {
      const index = this.employeeList.findIndex(employee => employee._id === id);
      this.employeeList.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.employeeList);
      this.comms.showMsg("Employee deleted successfully");
      this.loadingService.closeBlockingLoader();
    },error => {
      this.comms.showMsg("Failed to delete employee");
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
    this.employeeAdded.emit(true);
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }
}
