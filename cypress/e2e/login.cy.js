import loginPage from '../pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('permite iniciar sesión con credenciales válidas', () => {
        loginPage.loginAsStandardUser()
    cy.url().should('include', '/inventory.html')
  })

  it('muestra error con contraseña incorrecta', () => {
    loginPage.login('standard_user', 'clave_incorrecta')
    loginPage.errorMessage
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

    it('muestra error con usuario bloqueado', () => {
    loginPage.login('locked_out_user', 'secret_sauce')
    loginPage.errorMessage
      .should('be.visible')
      .and('contain', 'locked out')
  })
})