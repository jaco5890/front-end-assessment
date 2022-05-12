import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    employeeApi = environment.API.employeeManagement;

    constructor(private http: HttpClient){}

    getAllEmployees() {
        return this.http.get(this.employeeApi);
    }

    getEmployeeById(id){
        return this.http.get(this.employeeApi + '/' + id);
    }

    createEmployee(employee) {
        return this.http.post(this.employeeApi, employee);
    }

    updateEmployee(employee, id) {
        return this.http.patch(this.employeeApi + '/' + id, employee);
    }

    deleteEmployee(id) {
        return this.http.delete(this.employeeApi + '/' + id);
    }
}