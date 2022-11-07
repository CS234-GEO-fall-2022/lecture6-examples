import { InjectionToken } from "@angular/core";



//-------Class providers example
export abstract class AuthService {
    abstract isAuthorized();
}

export class CookieAuthService extends AuthService  {
    isAuthorized() {
        console.log("CookieAuthService " + "isAuthorized");
        return true;
        //check document.cookie
    }
}

export class LocalStorageAuthService extends AuthService {
    isAuthorized() {
        console.log("LocalStorageAuthService");
        //check localStorage
    }
}


export class FakeAuthServie extends AuthService {
    isAuthorized() {
        console.log("FakeAuthServie");
        return true;//fake
    }
}




//-------Factory providers example
export class TranslateService
{
    constructor(public currentLanguage: string){
    }
}


//-------Alias providers example
export abstract class UserService {
    abstract test();
}

export class UserService2{
    public test(){
        console.log("UserService");
    }
}



//-------Value providers example
export interface AppConfig{
    appName: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');