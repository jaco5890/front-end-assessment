import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./screens/employee/employee.module').then(
            (mod) => mod.EmployeeModule
          ),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./screens/employee/employee.module').then(
            (mod) => mod.EmployeeModule
          ),
      },
      {
        path: 'dummy',
        loadChildren: () =>
          import('./screens/dummy/dummy.module').then(
            (mod) => mod.DummyModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
