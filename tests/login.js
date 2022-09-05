const { Selector } = require("testcafe");

fixture `Login Suite`.page('./');

test('Valid Login', async (t) =>{
    await t
    .typeText('#user-name','standard_user')
    .typeText('#password','secret_sauce')
    .click('#login-button')
    .expect(Selector('.title').innerText)
    .eql('PRODUCTS')
})