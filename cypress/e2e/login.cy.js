import { loginPage } from '../support/pages/loginPage';

describe("Login Page", () => {
  beforeEach(() => {
    cy.fixture("loginData").as("login");
    loginPage.visit();
  });

  it("Positive Login Test", function () {
    loginPage.doLogin(this.login.validUser.username, this.login.validUser.password);
    loginPage.assertSuccessfulLogin();
  });

  it("Negative username test", function () {
    loginPage.doLogin(this.login.invalidUser.username, this.login.invalidUser.password);
    loginPage.assertError("Your username is invalid!");
  });

  it("Negative password test", function () {
    loginPage.doLogin(this.login.invalidPassword.username, this.login.invalidPassword.password);
    loginPage.assertError("Your password is invalid!");
  });
});