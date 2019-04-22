import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    VirtualScrollerModule
  ],
  declarations: [HomeComponent, TableComponent]
})
export class HomeModule { }
