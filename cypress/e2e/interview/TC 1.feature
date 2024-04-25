Feature: Test Case 1

    Background: 
        Given Open Saucedemo Website

    Scenario: Login to website with correct username and invalid password
        
        When I enter the correct username and an invalid password and hit login button
            |username      |password|
            |standard_user |test123 |
        Then I should see a validation message displayed
