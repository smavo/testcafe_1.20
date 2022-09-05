const { Selector } = require("testcafe");
const { default: LoginPage } = require("../pages/LoginPage");

fixture`Login Suite`.page('./');

test('Valid Login', async (t) => {
    LoginPage.login("standard_user", "secret_sauce")
    await t
        //    .typeText('#user-name','standard_user')
        //    .typeText('#password','secret_sauce')
        //    .click('#login-button')
        .expect(Selector('.title').innerText)
        .eql('PRODUCTS');
})

test('InValid Login', async (t) => {
    LoginPage.login("test", "test")
    await t
        //    .typeText('#user-name','test')
        //    .typeText('#password','test')
        //    .click('#login-button')
        .expect(Selector(`h3[data-test="error"]`).innerText)
        .eql("Epic sadface: Username and password do not match any user in this service");
})