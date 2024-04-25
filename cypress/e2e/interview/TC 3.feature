Feature: Test Case 3

    Background: 
        Given Open Saucedemo Website

    Scenario: Verify the the shoping functionality till the checkout and dispatch
        Given I have logged in with correct username and valid password
        When I add a product to my cart
        When I proceed to checkout via the cart page
        When I fill in all required information
        When I complete the checkout process
        Then I should get a confirmation message that my order has been dispatched