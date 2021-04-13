import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BazRoutingModule } from './baz-routing.module';
import { BazComponent } from './baz/baz.component';

@NgModule({
  imports: [CommonModule, BazRoutingModule],
  declarations: [BazComponent]
})
export class BazModule {}
