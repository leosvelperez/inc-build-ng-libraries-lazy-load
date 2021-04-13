import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BazComponent } from "./baz/baz.component";

export const routes: Routes = [
  { path: '', component: BazComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class BazRoutingModule {}
