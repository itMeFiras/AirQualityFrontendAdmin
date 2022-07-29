import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes  } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NodelistComponent } from './nodelist/nodelist.component';
import { NodeProfileComponent } from './node-profile/node-profile.component';
import { AddnodeComponent } from './addnode/addnode.component';
import { RequestListComponent } from './request-list/request-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const appRoutes : Routes = [
  {path : "dashboard" , component:DashboardComponent},
  {path : "userList" , component:UserlistComponent},
  {path : "userList/:id" , component:UserprofileComponent},
  {path : "nodeList" , component:NodelistComponent},
  {path : "nodeList/nodeProfile/:id" , component:NodeProfileComponent},
  {path : "nodeList/createNode" , component:AddnodeComponent},
  {path : "requestList" , component:RequestListComponent},
  {path : "myAccount" , component:MyaccountComponent},
  {path : "**" , redirectTo:"dashboard"},

]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserlistComponent,
    UserprofileComponent,
    NodelistComponent,
    NodeProfileComponent,
    AddnodeComponent,
    RequestListComponent,
    LoginComponent,
    DashboardComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
