import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/adduser',
    component: UserFormComponent,
  },
  {
    path: 'users/:userID',
    component: UserComponent,
  },
  {
    path: 'users/:userID/edit',
    component: UserFormComponent,
  },

  {
    path: 'products', //todo http://localhost:4200/products
    component: ProductsComponent,
  },
  {
    path: 'products/:productID', //todo http://localhost:4200/products/3
    component: ProductComponent,
  },
  {
    path: 'products/:productID/edit/:pStatus', //todo http://localhost:4200/products/3/edit/Iphone%2015
    component: ProductFormComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
