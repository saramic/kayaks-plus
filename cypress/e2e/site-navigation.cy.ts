describe('navigation of KayaksPlus.store site', () => {
  it('navigates header and footer links', () => {
    cy.log("When I visit the site")
    cy.visit('http://localhost:3030')

    cy.log("Then I should see the title")
    cy.get('h1').should('have.text', 'kayaksplus.store')

    cy.log("When the about link is followed")
    cy.get('footer a').contains('about').click()

    cy.log("Then the user is on the about page")
    cy.url().should('include', '/about')

    cy.log("And contains the about text")
    cy.contains('Kayaks Plus is an Australian owned company ')

    cy.log("When we navigate home")
    cy.get('header .navbar-brand a').click()

    cy.log("Then the user is on the home page")
    cy.url().should('equal', 'http://localhost:3030/')
    cy.get('h1').should('have.text', 'kayaksplus.store')
  })
})