import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from '../../core/base/base.module';
import { MaterialModule } from '../../core/material/material.module';
import { InfoCardModule } from '../../components/info-card/info-card.module';
import { LoadingModule } from '../../components/loading/loading.module';
import { ComsModule } from '../../components/coms/coms.module';
import { DummyComponent } from './dummy.component';

const routes: Routes = [
    {
        path: '',
        component: DummyComponent,
    },
];
@NgModule({
    declarations: [DummyComponent],
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
export class DummyModule { }
