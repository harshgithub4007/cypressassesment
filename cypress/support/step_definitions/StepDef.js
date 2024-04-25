import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import Loginpage from '../../e2e/interview/Loginpage'


//Scenario 1
Given('Open Saucedemo Website', () => {
    Loginpage.url()
})

When('I enter the correct username and an invalid password and hit login button', (datatable) => {
    datatable.hashes().forEach(element =>{
    Loginpage.fillusername(element.username)
    Loginpage.fillpassword(element.password)
    Loginpage.login()
    })
})

Then('I should see a validation message displayed', () => {
    Loginpage.validation('be.visible')
})


//Scenario 2
Given('I am logged in with correct username and valid password', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
})

When('I select the Price low to high filter from the dropdown', (filterOption) => {
    cy.get('[data-test="product-sort-container"]').select('lohi')
})

let lowprice
let lowdesc
When('I add the first listed product to the cart', () => {
    cy.get('.btn.btn_primary.btn_small.btn_inventory').its('length')
    
        cy.get('.inventory_item_price').eq(0).invoke('text').then(price => {
            lowprice = price
            cy.log('Price of the first element:', lowprice)
      
        })
    
        cy.get('.inventory_item_desc').eq(0).invoke('text').then(desc =>{
            lowdesc = desc
            cy.log('Desc of lowest price product:', lowdesc)
        })
    cy.get('.btn.btn_primary.btn_small.btn_inventory').first().click()
})

let highprice
let highdesc
When('I add the last listed product to the cart', () => {
    
        cy.get('.inventory_item_price').its('length').then(length => {
            cy.get('.inventory_item_price').eq(length - 1).invoke('text').then(hprice => {
                highprice = hprice
                cy.log('Price of the last element:', highprice)
            })
        })
    
        cy.get('.inventory_item_desc').its('length').then(length=>{
            cy.get('.inventory_item_desc').eq(length - 1).invoke('text').then(hdesc => {
            highdesc = hdesc
            cy.log('Desc of highest price product:', highdesc)
            
            })
        })
        cy.get('.btn.btn_primary.btn_small.btn_inventory').last().click()
        cy.get('.shopping_cart_link').click()
})

Then('I should get the descriptions of both products on the cart page', () => {
    cy.get('.inventory_item_desc').eq(0).invoke('text').then(cartlowdesc => {
        // Compare the text of the element with lowdesc
        expect(cartlowdesc.trim()).to.equal(lowdesc); // Assuming lowdesc contains the expected text
    })

    cy.get('.inventory_item_desc').eq(1).invoke('text').then(carthighdesc => {
        // Compare the text of the element with lowdesc
        expect(carthighdesc.trim()).to.equal(highdesc); // Assuming lowdesc contains the expected text
    })
})

Then('I should get the prices of both products on the cart page', () => {
    cy.get('.inventory_item_price').eq(0).invoke('text').then(cartlowprice => {
        // Compare the text of the element with lowdesc
        expect(cartlowprice.trim()).to.equal(lowprice); // Assuming lowdesc contains the expected text
    })

    cy.get('.inventory_item_price').eq(1).invoke('text').then(carthighprice => {
        // Compare the text of the element with lowdesc
        expect(carthighprice.trim()).to.equal(highprice); // Assuming lowdesc contains the expected text
    })
})


//Scenario 3
Given('I have logged in with correct username and valid password', () => {
     cy.get('#user-name').type('standard_user')
     cy.get('#password').type('secret_sauce')
     cy.get('#login-button').click()
});

When('I add a product to my cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
});

When('I proceed to checkout via the cart page', () => {
    cy.get('#checkout').click()
});

When('I fill in all required information', () => {
    cy.get('#first-name').type('test first')
    cy.get('#last-name').type('test last')
    cy.get('#postal-code').type('545465')
    cy.get('#continue').click()
});

When('I complete the checkout process', () => {
    cy.get('#finish').click()
});

Then('I should get a confirmation message that my order has been dispatched', () => {
    cy.get('.title').should('contain','Checkout: Complete!')
    cy.get('.complete-text').should('contain','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
});