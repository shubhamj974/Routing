import { UserRoleGuard } from './shared/services/user-role.guard';
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
import { AuthGaurd } from './shared/services/auth.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AdminComponent } from './shared/components/admin/admin.component';

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
    canActivateChild: [AuthGaurd],
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
    canActivateChild: [AuthGaurd],
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
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGaurd, UserRoleGuard],
    data: {
      userRole: ['admin'],
    },
  },
  {
    path: 'auth',
    component: AuthComponent,
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
