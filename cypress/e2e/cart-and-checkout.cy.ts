describe('cart and checkout', () => {
  Cypress.Keyboard.defaults({
    keystrokeDelay: 0,
  })
  it('adds 3 items to cart and checks out', () => {
    cy.getAllLocalStorage['lastSearches']
    cy.log("When I visit the site")
    cy.visit('http://localhost:3030')
    cy.get('h1').should('have.text', 'kayaksplus.store')

    cy.log("And the cart is opened")
    cy.get('header .burger').click({ force: true })
    cy.get('header .navbar-end a').contains('cart').click()

    cy.log("Then the cart is not visible")
    cy.get("table").should('not.exist')

    cy.log("And user is informed there is not cart so it is a pure enquiry");
    cy.get("[data-testid=no-cart-message]").should('contain.text', 'No cart items, general enquiry only');

    cy.log("When we navigate home")
    cy.get('header .navbar-brand a').click()

    // TODO: header should auto close when we change pages
    cy.log("And we close the header")
    cy.get('header .burger').click({ force: true })

    cy.log("And I add to cart first best 3 item")
    cy.get('#product-1 button').contains('add to cart').click()
      .should('have.class', 'is-loading')
    cy.get('#product-1 button').contains('add to cart').should('not.have.class', 'is-loading')

    cy.get('#product-2 button').contains('add to cart').click()
      .should('have.class', 'is-loading')
    cy.get('#product-2 button').contains('add to cart').should('not.have.class', 'is-loading')

    cy.get('#product-3 button').contains('add to cart').click()
      .should('have.class', 'is-loading')
    cy.get('#product-3 button').contains('add to cart').should('not.have.class', 'is-loading')

    cy.log("And the cart is opened")
    cy.get('header .burger').click({ force: true })
    cy.get('header .navbar-end a').contains('cart').click()
    // TODO: hopefully this will be sorted once the cart is inected as React Context
    // cy.log("Then the cart count is correct")
    // cy.get("[data-testid=cart-count]").should('have.text', '3')
    // TODO: header should auto close when we change pages
    cy.get('header .burger').click({ force: true })

    cy.log("Then the cart shows the item")
    cy.get("table tbody tr").should('have.length', 3)
    cy.get("table tbody tr:nth-child(1) td:nth-child(1)").should('have.text', 'falcon paddle 1')
    cy.get("table tbody tr:nth-child(1) td:nth-child(2)").should('have.text', '1')
    cy.get("table tbody tr:nth-child(1) td:nth-child(3)").should('have.text', '$100.10')

    cy.log("And the total is correct")
    cy.get("table tfoot tr").should('have.length', 1)
    cy.get("table tfoot tr:nth-child(1) td:nth-child(1)").should('have.text', 'Total')
    cy.get("table tfoot tr:nth-child(1) td:nth-child(3)").should('have.text', '$600.60')

    cy.log("When the user deletes the second item")
    cy.get("table tbody tr:nth-child(1) td:nth-child(3)").click()

    cy.log("Then the cart shows item 2 is no there")
    // TODO: updates if cart changes with Context
    // cy.get("table tbody tr").should('have.length', 2)
    // cy.get("[data-testid=cart-count]").should('have.text', '2')
    // cy.get("table tfoot tr:nth-child(1) td:nth-child(3)").should('have.text', '$400.40')

    // TODO: add same of 2 products

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