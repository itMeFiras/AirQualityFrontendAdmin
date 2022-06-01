import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes  } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NodelistComponent } from './nodelist/nodelist.component';
import { NodeProfileComponent } from './node-profile/node-profile.component';
import { AddnodeComponent } from './addnode/addnode.component';

const appRoutes : Routes = [
  {path : "userList" , component:UserlistComponent},
  {path : "userProfile/:id" , component:UserprofileComponent},
  {path : "nodeList" , component:NodelistComponent},
  {path : "nodeProfile/:id" , component:NodeProfileComponent},
  {path : "createNode" , component:AddnodeComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserlistComponent,
    UserprofileComponent,
    NodelistComponent,
    NodeProfileComponent,
    AddnodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
