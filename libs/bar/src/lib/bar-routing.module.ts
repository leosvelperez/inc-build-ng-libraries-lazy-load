import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  { path: 'baz', loadChildren: () => import('@incrementalbuildlazyloading/baz').then(m => m.BazModule) },
  { path: 'bar-inner', loadChildren: () => import('./bar/bar.component.module').then(m => m.BarInnerModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BarRoutingModule {}
