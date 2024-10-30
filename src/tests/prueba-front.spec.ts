import { LoginSaucedemo } from './../pages/login-saucedemo';
import {test} from "@playwright/test";


test("Login Locked", async ({page}, testInfo) => {
    const loginSaucedemo = new LoginSaucedemo(page);

    await loginSaucedemo.irSaucedemo("https://www.saucedemo.com/");
    await loginSaucedemo.loginSauce("locked_out_user","secret_sauce");
    await loginSaucedemo.validarMensaje("Epic sadface: Sorry, this user has been locked out.");
});


test("Login Fallido", async ({page}, testInfo) => {
    const loginSaucedemo = new LoginSaucedemo(page);

    await loginSaucedemo.irSaucedemo("https://www.saucedemo.com/");
    await loginSaucedemo.loginSauce("standard_user","123");
    await loginSaucedemo.validarMensaje("Epic sadface: Username and password do not match any user in this service");
});