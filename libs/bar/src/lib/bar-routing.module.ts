import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./bar/bar.component";

export const routes: Routes = [
  { path: '', component: BarComponent },
  { path: 'baz', loadChildren: () => import('@incrementalbuildlazyloading/baz').then(m => m.BazModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BarComponent]
})
export class BarRoutingModule {}
