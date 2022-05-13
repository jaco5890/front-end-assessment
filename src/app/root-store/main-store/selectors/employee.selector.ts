import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RootState } from "src/app/root-store/root-state";
import { AssessmentStoreState } from "../state";

export const featureKey = "mainApp";

const getMainAppState = createFeatureSelector<RootState, AssessmentStoreState>(
  featureKey
);

export const getEmployeeList = createSelector(
    getMainAppState,
  (state) => state.employee.employees
);

export const getEmployeeListLoading = createSelector(
    getMainAppState,
  (state) => state.employee.employeeLoading
);

export const getEmployeeListError = createSelector(
    getMainAppState,
  (state) => state.employee.employeesError
);

export const getEmployee = createSelector(
    getMainAppState,
  (state) => state.employee.employee
);

export const getEmployeeLoading = createSelector(
    getMainAppState,
  (state) => state.employee.employeeLoading
);

export const getEmployeeError = createSelector(
    getMainAppState,
  (state) => state.employee.employeeError
);

export const createEmployeeSuccess = createSelector(
    getMainAppState,
  (state) => state.employee.createEmployeeSuccess
);

export const createEmployeeLoading = createSelector(
    getMainAppState,
  (state) => state.employee.createEmployeeLoading
);

export const createEmployeeError = createSelector(
    getMainAppState,
  (state) => state.employee.createEmployeeError
);

export const getCreatedEmployee = createSelector(
    getMainAppState,
  (state) => state.employee.createdEmployee
);

export const updateEmployeeSuccess = createSelector(
    getMainAppState,
  (state) => state.employee.updateEmployeeSuccess
);

export const updateEmployeeLoading = createSelector(
    getMainAppState,
  (state) => state.employee.updateEmployeeLoading
);

export const updateEmployeeError = createSelector(
    getMainAppState,
  (state) => state.employee.updateEmployeeError
);

