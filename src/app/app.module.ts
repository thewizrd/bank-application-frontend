import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreRoutingModule } from './core/core-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerModule } from './customer/customer.module';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { StaffModule } from './staff/staff.module';
import { StaffRoutingModule } from './staff/staff-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AuthInterceptor } from './utils/auth-interceptor';
import { JwtInterceptor } from './utils/jwt-interceptor';
import { AdminNavGuard } from './guards/admin-nav.guard';
import { CustomerNavGuard } from './guards/customer-nav.guard';
import { StaffNavGuard } from './guards/staff-nav.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    CoreModule,
    CoreRoutingModule,

    CustomerModule,
    CustomerRoutingModule,

    StaffModule,
    StaffRoutingModule,

    AdminModule,
    AdminRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    AdminNavGuard,
    CustomerNavGuard,
    StaffNavGuard,
  ],
  bootstrap: [AppComponent, CoreModule],
})
export class AppModule {}
