class InventoryPage {
  // Selectores
  get title() {
    return cy.get('[data-test="title"]')
  }

  get cartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]')
  }

  get cartLink() {
    return cy.get('[data-test="shopping-cart-link"]')
  }

  // Acciones
  addProductToCart(productName) {
    const slug = productName.toLowerCase().replaceAll(' ', '-')
    cy.get(`[data-test="add-to-cart-${slug}"]`).click()
  }

  removeProductFromCart(productName) {
    const slug = productName.toLowerCase().replaceAll(' ', '-')
    cy.get(`[data-test="remove-${slug}"]`).click()
  }

  goToCart() {
    this.cartLink.click()
  }
}

export default new InventoryPage()