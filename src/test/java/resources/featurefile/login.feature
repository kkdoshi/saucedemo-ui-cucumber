Feature: Login Functionality
  As a user I want to check the login functionality

  @Smoke
  Scenario Outline: User should not be able to login the application using invalid credentials
    Given User is on 'saucedemo' website
    When User enters invalid "<UserId>" in the 'userid' field
    And User enters invalid "<Password>" in the 'password' field
    And User clicks on the login button
    Then User will see the error message displayed "<ErrorMessage>"
    Examples:
      | UserId          | Password           | ErrorMessage                                                              |
      | incorrect_email |                    | Epic sadface: Password is required                                        |
      |                 | incorrect_password | Epic sadface: Username is required                                        |
      | abcde%$£        | 12345678           | Epic sadface: Username and password do not match any user in this service |
      |                 |                    | Epic sadface: Username is required                                        |




