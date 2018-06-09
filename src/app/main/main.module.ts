import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { ItemsComponent } from './items/items.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserListComponent } from './user-list/user-list.component';
import { WireService } from './service/wire.service';
import { AddUpdateItemComponent } from './items/add-update-item/add-update-item.component';
import { AddUpdateCompaniesComponent } from './companies/add-update-companies/add-update-companies.component';
import { AddUpdateUserComponent } from './user-list/add-update-user/add-update-user.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    UserComponent,
    HomeComponent,
    ItemsComponent,
    CompaniesComponent,
    UserListComponent,
    AddUpdateItemComponent,
    AddUpdateCompaniesComponent,
    AddUpdateUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MainRoutingModule
  ],
  providers: [WireService],
})
export class MainModule { }
