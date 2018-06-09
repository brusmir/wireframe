import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItemsComponent } from './items/items.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddUpdateItemComponent } from './items/add-update-item/add-update-item.component';
import { AddUpdateCompaniesComponent } from './companies/add-update-companies/add-update-companies.component';
import { AddUpdateUserComponent } from './user-list/add-update-user/add-update-user.component';
import { HomeComponent } from './home/home.component';

const appMainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'companies',
        component: CompaniesComponent
      },
      {
        path: 'items/add',
        component: AddUpdateItemComponent
      },
      {
        path: 'items/:id',
        component: AddUpdateItemComponent
      },
      {
        path: 'companies/add',
        component: AddUpdateCompaniesComponent
      },
      {
        path: 'companies/:id',
        component: AddUpdateCompaniesComponent
      },
      {
        path: 'users/add',
        component: AddUpdateUserComponent
      },
      {
        path: 'users/:id',
        component: AddUpdateUserComponent
      },
      { path: '', component: HomeComponent }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(appMainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }

