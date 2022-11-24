import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [NavBarComponent],// for lazy loading and we gonna export it to use in another comp
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
