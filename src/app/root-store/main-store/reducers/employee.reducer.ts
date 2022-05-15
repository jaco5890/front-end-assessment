import { EmployeeActions, EmployeeActionTypes } from "../actions/employee.actions";

export interface EmployeeState {
  employees: any;
  employeesLoading: boolean;
  employeesError: boolean;

  employee: any;
  employeeLoading: boolean;
  employeeError: boolean;

  createEmployeeSuccess: boolean;
  createEmployeeLoading: boolean;
  createEmployeeError: boolean;
  createdEmployee: any;

  updateEmployeeSuccess: boolean;
  updateEmployeeLoading: boolean;
  updateEmployeeError: boolean;
  updatedEmployee: any;
}

export const initialState: EmployeeState = {
  employees: [],
  employeesLoading: false,
  employeesError: false,

  employee: null,
  employeeLoading: false,
  employeeError: false,

  createEmployeeSuccess: false,
  createEmployeeLoading: false,
  createEmployeeError: false,
  createdEmployee: null,

  updateEmployeeSuccess: false,
  updateEmployeeLoading: false,
  updateEmployeeError: false,
  updatedEmployee: null,
};

export function reducer(
  state = initialState,
  action: EmployeeActions
): EmployeeState {
  switch (action.type) {
    case EmployeeActionTypes.GET_EMPLOYEE_LIST: {
      return {
        ...state,
        employeesLoading: true,
        employeesError: false,
      };
    }

    case EmployeeActionTypes.GET_EMPLOYEE_LIST_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        employeesLoading: false,
        employeesError: false,
      };
    }

    case EmployeeActionTypes.GET_EMPLOYEE_LIST_FAILURE: {
      return {
        ...state,
        employeesLoading: false,
        employeesError: true,
      };
    }

    case EmployeeActionTypes.CLEAR_EMPLOYEE_LIST: {
      return {
        ...state,
        employees: []
      };
    }

    case EmployeeActionTypes.GET_EMPLOYEE: {
      return {
        ...state,
        employeeLoading: true,
        employeeError: false,
      };
    }

    case EmployeeActionTypes.GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employee: action.payload,
        employeeLoading: false,
        employeeError: false,
      };
    }

    case EmployeeActionTypes.GET_EMPLOYEE_FAILURE: {
      return {
        ...state,
        employeeLoading: false,
        employeeError: true,
      };
    }

    case EmployeeActionTypes.CREATE_EMPLOYEE: {
      return {
        ...state,
        createEmployeeLoading: true,
        createEmployeeError: false,
      };
    }

    case EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employees: [...state.employees, action.payload],
        createEmployeeSuccess: true,
        createEmployeeLoading: false,
        createEmployeeError: false,
      };
    }

    case EmployeeActionTypes.CREATE_EMPLOYEE_FAILURE: {
      return {
        ...state,
        createEmployeeLoading: false,
        createEmployeeError: true,
      };
    }

    case EmployeeActionTypes.UPDATE_EMPLOYEE: {
      return {
        ...state,
        updateEmployeeLoading: true,
        updateEmployeeError: false,
      };
    }

    case EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS: {
     let itemIndex = state.employees.findIndex(item => item._id == action.payload._id);
     state.employees[itemIndex] = action.payload;
      return {
        ...state,
        employees: [...state.employees],
        updateEmployeeSuccess: true,
        updateEmployeeLoading: false,
        updateEmployeeError: false,
      };
    }

    case EmployeeActionTypes.UPDATE_EMPLOYEE_FAILURE: {
      return {
        ...state,
        updateEmployeeLoading: false,
        updateEmployeeError: true,
      };
    }
    default:
      return state;
  }
}
