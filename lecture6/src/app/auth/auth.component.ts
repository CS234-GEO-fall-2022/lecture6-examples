import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG, AuthService, CookieAuthService, TranslateService, UserService } from 'src/shared/services/auth.srvice';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, 
              private translateService: TranslateService, 
              private userService: UserService,
              @Inject(APP_CONFIG) private config: AppConfig ) {
 
 
    //-------Class providers example
    console.log(this.authService.isAuthorized());
    

    //-------Factory providers example
    console.log(this.translateService.currentLanguage);
   

    //-------Value providers example
    console.log(this.config.appName);
 

    //-------Alias providers example
    console.log(this.userService.test());
   }

  ngOnInit(): void {
  }

}
