class LoginPage {
  visit() {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  }

  fillUsername(username) {
    cy.get("input[name='username']").clear().type(username);
  }

  fillPassword(password) {
    cy.get("input[name='password']").clear().type(password);
  }

  submit() {
    cy.contains("button", "Submit").click();
  }

  doLogin(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  assertSuccessfulLogin() {
    cy.url().should("include", "/logged-in-successfully/");
    cy.get("p").should("contain", "Congratulations");
    cy.contains("a", "Log out").should("be.visible");
  }

  assertError(errorMessage) {
    cy.contains("div", errorMessage).should("be.visible");
  }

  assertPasswordError() {
    cy.contains("div", "Your password is invalid!").should("be.visible");
  }
}

export const loginPage = new LoginPage();
