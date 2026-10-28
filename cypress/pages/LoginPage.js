class LoginPage {
  // Selectores: los definimos una sola vez
  get usernameInput() {
    return cy.get('[data-test="username"]')
  }

  get passwordInput() {
    return cy.get('[data-test="password"]')
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]')
  }

  get errorMessage() {
    return cy.get('[data-test="error"]')
  }

  // Acciones: lo que el usuario puede hacer en esta página
  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  login(username, password) {
    this.usernameInput.type(username)
    this.passwordInput.type(password)
    this.loginButton.click()
  }

    loginAsStandardUser() {
    this.login('standard_user', 'secret_sauce')
  }
}

export default new LoginPage()