import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

describe('Carrito de compras', () => {
  beforeEach(() => {
    loginPage.visit()
    loginPage.loginAsStandardUser()
  })

  it('agrega un producto y el contador muestra 1', () => {
    inventoryPage.addProductToCart('Sauce Labs Backpack')
    inventoryPage.cartBadge.should('have.text', '1')
  })

  it('agrega dos productos y el contador muestra 2', () => {
    inventoryPage.addProductToCart('Sauce Labs Backpack')
    inventoryPage.addProductToCart('Sauce Labs Bike Light')
    inventoryPage.cartBadge.should('have.text', '2')
  })

  it('quita un producto y el contador desaparece', () => {
    inventoryPage.addProductToCart('Sauce Labs Backpack')
    inventoryPage.removeProductFromCart('Sauce Labs Backpack')
    inventoryPage.cartBadge.should('not.exist')
  })
})