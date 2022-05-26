import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  declarations: [HomePageComponent, NavbarComponent],
  imports: [CommonModule, ViewsRoutingModule],
})
export class ViewsModule {}
