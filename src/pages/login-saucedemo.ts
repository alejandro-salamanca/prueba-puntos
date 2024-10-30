import {Locator, Page, expect} from '@playwright/test';


export class LoginSaucedemo{
    readonly page:Page;
    readonly user:Locator;
    readonly password:Locator;
    readonly login:Locator;
    readonly mensaje:Locator;

    constructor(page:Page){
        this.page = page;
        this.user = page.locator("input[placeholder='Username']");
        this.password = page.locator("input[placeholder='Password']");
        this.login = page.locator("input#login-button");
        this.mensaje = page.locator("h3[data-test='error']");
    }

    async irSaucedemo(url:string) {
        await this.page.goto(url);
    }

    async loginSauce(user:string, password:string){
        await this.user.fill(user);
        await this.password.fill(password);
        await this.login.click();
    }

    async validarMensaje(mensaje:string){
       expect(await this.mensaje.textContent()).toContain(mensaje);
    }


}