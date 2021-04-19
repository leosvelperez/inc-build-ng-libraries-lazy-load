import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./bar.component";

export const routes: Routes = [
  { path: '', component: BarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BarComponent]
})
export class BarInnerModule {}
