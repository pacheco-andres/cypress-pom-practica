import loginPage from '../pages/LoginPage'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('permite iniciar sesión con credenciales válidas', () => {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('muestra error con contraseña incorrecta', () => {
    loginPage.login('standard_user', 'clave_incorrecta')
    loginPage.errorMessage
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })
})