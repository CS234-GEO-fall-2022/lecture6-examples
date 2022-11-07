import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_CONFIG, AuthService, CookieAuthService, LocalStorageAuthService, TranslateService, UserService, UserService2 } from 'src/shared/services/auth.srvice';
import { Test2Service } from 'src/shared/services/test2.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { Test2Component } from './test2/test2.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    Test2Component,
    BookComponent,
    BookListComponent  
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    
    //-------Class providers example
    {provide: AuthService, useClass: CookieAuthService},


    //-------Alias providers example
    UserService2,
    {provide: UserService, useExisting: UserService2},
    
    //-------Factory providers example
    { provide: TranslateService, useFactory: (auth: AuthService)=> {

      console.log("angular di called our factory methods");
      console.log(auth.isAuthorized());
      return new TranslateService(localStorage.getItem('lang'));
    },
    deps: [AuthService]},

    //-------Value providers example
    {provide: APP_CONFIG, useValue: {appName: 'MyApp'}},




    Test2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
