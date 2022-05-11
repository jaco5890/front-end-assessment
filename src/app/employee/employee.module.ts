import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from '../core/base/base.module';
import { MaterialModule } from '../core/material/material.module';
import { InfoCardModule } from '../components/info-card/info-card.module';
import { EmployeeComponent } from './employee.component';
import { LoadingModule } from '../components/loading/loading.module';
import { ComsModule } from '../components/coms/coms.module';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
    },
];
@NgModule({
    declarations: [EmployeeComponent],
    imports: [
        CommonModule,
        BaseModule,
        RouterModule.forChild(routes),
        MaterialModule,
        InfoCardModule,
        ComsModule,
        LoadingModule
    ]
})
export class EmployeeModule { }
