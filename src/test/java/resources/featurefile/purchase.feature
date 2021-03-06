Feature: Search functionality
  As a user I want to purchase cheapest and costliest product from the SauceDemo after sorting the products by Hight to Low filter.

  @Regression
  Scenario: User navigates SauceDemo page and completes the item purchase
    Given I am on SauceDemo page
    When I login with credential username "standard_user" and password "secret_sauce"
    And I click on Login button
    And I filter the products by Price "Price (high to low)"
    And I select cheapest & costliest products and add to basket
    And I open shopping cart
    And I go to checkout
    And I enter details firstname "Tom", lastName "Cat" and zipPostalCode "HA8 7UU"
    And I click on continue button
    And I click on finish button
    Then I should be able to see message "Thank you for your order"