$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a user I want to check the login functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should not be able to login the application using invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \u0027saucedemo\u0027 website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"\u003cUserId\u003e\" in the \u0027userid\u0027 field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid \"\u003cPassword\u003e\" in the \u0027password\u0027 field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User will see the error message displayed \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "UserId",
        "Password",
        "ErrorMessage"
      ],
      "line": 12,
      "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;1"
    },
    {
      "cells": [
        "incorrect_email",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 13,
      "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;2"
    },
    {
      "cells": [
        "",
        "incorrect_password",
        "Epic sadface: Username is required"
      ],
      "line": 14,
      "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;3"
    },
    {
      "cells": [
        "abcde%$£",
        "12345678",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 15,
      "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;4"
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ],
      "line": 16,
      "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4836704200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should not be able to login the application using invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \u0027saucedemo\u0027 website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"incorrect_email\" in the \u0027userid\u0027 field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid \"\" in the \u0027password\u0027 field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User will see the error message displayed \"Epic sadface: Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.userIsOnSaucedemoWebsite()"
});
formatter.result({
  "duration": 166603900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incorrect_email",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInTheUseridField(String)"
});
formatter.result({
  "duration": 139876800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInThePasswordField(String)"
});
formatter.result({
  "duration": 72578500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 75447600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 43
    }
  ],
  "location": "LoginStepDefs.userWillSeeTheErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 40880900,
  "status": "passed"
});
formatter.after({
  "duration": 791033900,
  "status": "passed"
});
formatter.before({
  "duration": 1997899900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should not be able to login the application using invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \u0027saucedemo\u0027 website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"\" in the \u0027userid\u0027 field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid \"incorrect_password\" in the \u0027password\u0027 field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User will see the error message displayed \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.userIsOnSaucedemoWebsite()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInTheUseridField(String)"
});
formatter.result({
  "duration": 114241200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "incorrect_password",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInThePasswordField(String)"
});
formatter.result({
  "duration": 149526000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 186561800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 43
    }
  ],
  "location": "LoginStepDefs.userWillSeeTheErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 39365800,
  "status": "passed"
});
formatter.after({
  "duration": 868518700,
  "status": "passed"
});
formatter.before({
  "duration": 1800379200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should not be able to login the application using invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \u0027saucedemo\u0027 website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"abcde%$£\" in the \u0027userid\u0027 field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid \"12345678\" in the \u0027password\u0027 field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User will see the error message displayed \"Epic sadface: Username and password do not match any user in this service\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.userIsOnSaucedemoWebsite()"
});
formatter.result({
  "duration": 537300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcde%$£",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInTheUseridField(String)"
});
formatter.result({
  "duration": 127972000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInThePasswordField(String)"
});
formatter.result({
  "duration": 102272900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 66329000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 43
    }
  ],
  "location": "LoginStepDefs.userWillSeeTheErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 42682500,
  "status": "passed"
});
formatter.after({
  "duration": 759031500,
  "status": "passed"
});
formatter.before({
  "duration": 1852612300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not be able to login the application using invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-the-application-using-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \u0027saucedemo\u0027 website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters invalid \"\" in the \u0027userid\u0027 field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid \"\" in the \u0027password\u0027 field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User will see the error message displayed \"Epic sadface: Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.userIsOnSaucedemoWebsite()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInTheUseridField(String)"
});
formatter.result({
  "duration": 92191000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStepDefs.userEntersInvalidInThePasswordField(String)"
});
formatter.result({
  "duration": 61051600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.userClicksOnTheLoginButton()"
});
formatter.result({
  "duration": 87244800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 43
    }
  ],
  "location": "LoginStepDefs.userWillSeeTheErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 30817800,
  "status": "passed"
});
formatter.after({
  "duration": 804793800,
  "status": "passed"
});
formatter.uri("purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the SauceDemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1816301000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User navigates SauceDemo page and completes the item purchase",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-completes-the-item-purchase",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on SauceDemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I filter the products by Price \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter details firstname \"Tom\", lastName \"Cat\" and zipPostalCode \"HA8 7UU\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \"Thank you for your order\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseSteps.iAmOnSauceDemoPage()"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "PurchaseSteps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 251234600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 128947500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 32
    }
  ],
  "location": "PurchaseSteps.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 444410000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 2328715900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 155086500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iGoToCheckout()"
});
formatter.result({
  "duration": 101034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 27
    },
    {
      "val": "Cat",
      "offset": 43
    },
    {
      "val": "HA8 7UU",
      "offset": 67
    }
  ],
  "location": "PurchaseSteps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 363160600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 99997500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 82712100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your order",
      "offset": 33
    }
  ],
  "location": "PurchaseSteps.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 41064400,
  "status": "passed"
});
formatter.after({
  "duration": 810080200,
  "status": "passed"
});
});