# Qualitara Cypress Tests

This project contains end-to-end tests for the login functionality using [Cypress](https://www.cypress.io/).

## Project Structure

```
cypress.config.js
package.json
cypress/
  downloads/
  e2e/
    login.cy.js
  fixtures/
    example.json
    loginData.json
  support/
    commands.js
    e2e.js
    pages/
      loginPage.js
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Open Cypress Test Runner:

   ```sh
   npm run cy:open
   ```

   Or run tests in headless mode:

   ```sh
   npm run cy:run
   ```

## Test Files

- Main test: [`cypress/e2e/login.cy.js`](cypress/e2e/login.cy.js)
- Page Object: [`cypress/support/pages/loginPage.js`](cypress/support/pages/loginPage.js)
- Test data: [`cypress/fixtures/loginData.json`](cypress/fixtures/loginData.json)


## More Info

- [Cypress Documentation](https://docs.cypress.io/)