describe('navigation of KayaksPlus.store site', () => {
  Cypress.Keyboard.defaults({
    keystrokeDelay: 0,
  })
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

    cy.log("When the cart link is followed")
    cy.get('header .burger').click({ force: true })
    cy.get('header .navbar-end a').contains('cart').click()

    cy.log("Then the user is on the cart page")
    cy.url().should('include', '/cart')

    cy.log("When they submit they form")
    cy.get('#name').type('Kathrine Kayaker')
    cy.get('#email').type('kath@kayak.org')
    // https://www.acma.gov.au/phone-numbers-use-tv-shows-films-and-creative-works
    cy.get('#phone').type('0491570006')
    cy.get('#address-line-1').type('The Kayak District')
    cy.get('#address-line-2').type('123 Paddle Street')
    cy.get('#suburb').type('Kayakville')
    cy.get('#state').type('South Australia')
    cy.get('#payment-preference').select('Direct Transfer')
    cy.get('#more-information').type('I would like to purchase 2 kayaks')
    cy.get('#submitForm').contains('Send purchase enquiry').click()

    cy.log("Then the submit button is loading")
    cy.get('#submitForm').get('.is-loading')
    cy.get('#submitForm').should('not.have.class', 'is-loading')
  })
})