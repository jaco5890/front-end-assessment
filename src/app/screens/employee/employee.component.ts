import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { RootStoreState } from 'src/app/root-store';
import { ClearEmployeeList, GetEmployeeList } from 'src/app/root-store/main-store/actions/employee.actions';
import { getEmployeeList, getEmployeeListError, getEmployeeListLoading } from 'src/app/root-store/main-store/selectors/employee.selector';
import {Employee} from '../../models/employee.model'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  employeesLoading$: Observable<any> = this.store.select(getEmployeeListLoading);
  employeesError$: Observable<any> = this.store.select(getEmployeeListError);

  employeeList = [];
  constructor(private loadingService: LoadingService, 
              private store: Store<RootStoreState.RootState>) { }

  ngOnInit(): void {
    this.loadingService.openBlockingLoader("Retrieving employees");
    this.makeGetAllEmployeesCall()
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.store
    .select(getEmployeeList)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((employees: any) => {
      if (employees) {
        console.log(employees);
        this.employeeList = employees.data;
      }
      this.loadingService.closeBlockingLoader();
    });
  }

  makeGetAllEmployeesCall(){
    this.store.dispatch(new ClearEmployeeList());
    this.store.dispatch(
      new GetEmployeeList()
    );
  }

  addedEmployee() {
   this.getAllEmployees();
  }

}
