import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./state";
import { EmployeeEffects } from "./effects/employee.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('mainApp', reducers),
    EffectsModule.forFeature([
      EmployeeEffects,
    ]),
  ],
})
export class MainAppStoreModule { }
