import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";
import { CreateEmployeeFailure, CreateEmployeeSuccess, EmployeeActionTypes, GetEmployeeFailure, GetEmployeeListFailure, GetEmployeeListSuccess, GetEmployeeSuccess, UpdateEmployeeFailure, UpdateEmployeeSuccess } from "../actions/employee.actions";

@Injectable()
export class EmployeeEffects {
  public constructor(
    private actions$: Actions,
    private service: EmployeeService
  ) { }

  @Effect()
  GetEmployeeList$: Observable<any> = this.actions$.pipe(
    ofType(EmployeeActionTypes.GET_EMPLOYEE_LIST),
    switchMap((action: any) => {
      return this.service.getAllEmployees().pipe(
        map((res: any) => new GetEmployeeListSuccess(res)),
        catchError((error) => of(new GetEmployeeListFailure(error)))
      );
    })
  );

  @Effect()
  GetEmployee$: Observable<any> = this.actions$.pipe(
    ofType(EmployeeActionTypes.GET_EMPLOYEE),
    switchMap((action: any) => {
      return this.service.getEmployeeById(action.id).pipe(
        map((res: any) => new GetEmployeeSuccess(res)),
        catchError((error) => of(new GetEmployeeFailure(error)))
      );
    })
  );

  @Effect()
  CreateEmployee$: Observable<any> = this.actions$.pipe(
    ofType(EmployeeActionTypes.CREATE_EMPLOYEE),
    switchMap((action: any) => {
      return this.service.createEmployee(action.payload).pipe(
        map((res: any) => new CreateEmployeeSuccess(res.data)),
        catchError((error) => of(new CreateEmployeeFailure(error)))
      );
    })
  );

  @Effect()
  UpdateEmployee$: Observable<any> = this.actions$.pipe(
    ofType(EmployeeActionTypes.UPDATE_EMPLOYEE),
    switchMap((action: any) => {
      return this.service.updateEmployee(action.payload, action.id).pipe(
        map((res: any) => new UpdateEmployeeSuccess(res.data)),
        catchError((error) => of(new UpdateEmployeeFailure(error)))
      );
    })
  );
}
