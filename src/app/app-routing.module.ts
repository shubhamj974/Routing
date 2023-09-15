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
import { AuthGaurd } from './shared/services/auth-gaurd.service';

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
    canActivate: [AuthGaurd],
    children: [
      {
        path: 'adduser',
        component: UserFormComponent,
      },
      {
        path: ':userID',
        component: UserComponent,
      },
      {
        path: ':userID/edit',
        component: UserFormComponent,
      },
    ],
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGaurd],
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent,
      },
      {
        path: ':productID',
        component: ProductComponent,
      },
      {
        path: ':productID/edit/:pStatus',
        component: ProductFormComponent,
      },
    ],
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
