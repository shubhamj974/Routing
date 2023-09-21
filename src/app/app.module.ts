import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { DialogBoxComponent } from './shared/components/dialog-box/dialog-box.component';
import { DialogLogoutComponent } from './shared/components/dialog-logout/dialog-logout.component';
import { NavBarToggleDirective } from './shared/directive/nav-bar-toggle.directive';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import { NoPastePasswordDirective } from './shared/directive/no-paste-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent,
    ProductFormComponent,
    UserFormComponent,
    DialogBoxComponent,
    DialogLogoutComponent,
    NavBarToggleDirective,
    AuthComponent,
    AdminComponent,
    NoPastePasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
