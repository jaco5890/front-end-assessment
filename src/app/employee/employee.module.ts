import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from '../core/base/base.module';
import { MaterialModule } from '../core/material/material.module';
import { InfoCardModule } from '../components/info-card/info-card.module';
import { EmployeeComponent } from './employee.component';
import { LoadingModule } from '../components/loading/loading.module';
import { ComsModule } from '../components/coms/coms.module';
import { EmptyEmployeesComponent } from './empty-employees/empty-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CardModule } from '../components/card/card.module';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
    },
];
@NgModule({
    declarations: [EmployeeComponent, EmptyEmployeesComponent, AddEmployeeComponent, EmployeeListComponent],
    imports: [
        CommonModule,
        BaseModule,
        RouterModule.forChild(routes),
        MaterialModule,
        InfoCardModule,
        CardModule,
        ComsModule,
        LoadingModule
    ]
})
export class EmployeeModule { }
