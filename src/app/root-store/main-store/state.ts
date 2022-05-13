import * as employee from "./reducers/employee.reducer";

export interface AssessmentStoreState {
    employee: employee.EmployeeState;
}

export const reducers = {
    employee: employee.reducer,
  };