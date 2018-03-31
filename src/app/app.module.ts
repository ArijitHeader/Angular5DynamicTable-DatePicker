import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{UserService} from './shared-service/user.service'
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserformComponent } from './components/userform/userform.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from'ngx-pagination';
import{ExampleService} from'./example.service';
  const appRoutes: Routes=[
    {path:'',component:ListuserComponent},
    {path:'op',component:UserformComponent},
  ]
@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,ExampleService],
  bootstrap: [AppComponent]

})
export class AppModule { }
