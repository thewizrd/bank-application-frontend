import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, FormsModule, CoreRoutingModule],
  exports: [HeaderComponent, LandingComponent, FooterComponent],
})
export class CoreModule {}
