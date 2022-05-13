import { Action } from "@ngrx/store";

export enum EmployeeActionTypes {
  GET_EMPLOYEE_LIST = "[Employees] Get Employee List",
  GET_EMPLOYEE_LIST_SUCCESS = "[Employees] Get Employee List Success",
  GET_EMPLOYEE_LIST_FAILURE = "[Employees] Get Employee List Error",
  CLEAR_EMPLOYEE_LIST = "[Employees] Clear Employee List",

  GET_EMPLOYEE = "[Employee] Get Employee by Id",
  GET_EMPLOYEE_SUCCESS = "[Employee] Get Employee by Id Success",
  GET_EMPLOYEE_FAILURE = "[Employee] Get Employee by Id Error",

  CREATE_EMPLOYEE = "[Employee] Create employee",
  CREATE_EMPLOYEE_SUCCESS = "[Employee] Create employee Success",
  CREATE_EMPLOYEE_FAILURE = "[Employee] Create employee Failure",

  UPDATE_EMPLOYEE = "[Employee] Update employee",
  UPDATE_EMPLOYEE_SUCCESS = "[Employee] Update employee Success",
  UPDATE_EMPLOYEE_FAILURE = "[Employee] Update employee Failure",
}

export class GetEmployeeList implements Action {
  readonly type = EmployeeActionTypes.GET_EMPLOYEE_LIST;
  constructor() { }
}

export class GetEmployeeListSuccess implements Action {
  readonly type = EmployeeActionTypes.GET_EMPLOYEE_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class GetEmployeeListFailure implements Action {
  readonly type = EmployeeActionTypes.GET_EMPLOYEE_LIST_FAILURE;
  constructor(public payload: any) { }
}

export class ClearEmployeeList implements Action {
  readonly type = EmployeeActionTypes.CLEAR_EMPLOYEE_LIST;
  constructor() { }
}

export class GetEmployee implements Action {
  readonly type = EmployeeActionTypes.GET_EMPLOYEE;
  constructor(public id: any) { }
}

export class GetEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.GET_EMPLOYEE_SUCCESS;
  constructor(public payload: any) { }
}

export class GetEmployeeFailure implements Action {
  readonly type = EmployeeActionTypes.GET_EMPLOYEE_FAILURE;
  constructor(public payload: any) { }
}

export class CreateEmployee implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE;
  constructor(public payload: any) { }
}

export class CreateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS;
  constructor(public payload: any) { }
}

export class CreateEmployeeFailure implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_FAILURE;
  constructor(public payload: any) { }
}

export class UpdateEmployee implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE;
  constructor(public payload: any, public id: any) { }
}

export class UpdateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateEmployeeFailure implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_FAILURE;
  constructor(public payload: any) { }
}


export type EmployeeActions =
  | GetEmployeeList
  | GetEmployeeListSuccess
  | GetEmployeeListFailure
  | ClearEmployeeList
  | GetEmployee
  | GetEmployeeSuccess
  | GetEmployeeFailure
  | CreateEmployee
  | CreateEmployeeSuccess
  | CreateEmployeeFailure
  | UpdateEmployee
  | UpdateEmployeeSuccess
  | UpdateEmployeeFailure
