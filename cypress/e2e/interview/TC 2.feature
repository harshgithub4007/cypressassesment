Feature: Test Case 2

    Background: 
        Given Open Saucedemo Website

    Scenario: Add first and last Product in the cart and verify those products price and description on cart page
        Given I am logged in with correct username and valid password
        When I select the Price low to high filter from the dropdown
        When I add the first listed product to the cart
        When I add the last listed product to the cart
        Then I should get the descriptions of both products on the cart page
        Then I should get the prices of both products on the cart page