package com.saucedemo.cucumber.steps;


import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefs {
    @Given("^User is on 'saucedemo' website$")
    public void userIsOnSaucedemoWebsite() {

    }

    @When("^User enters invalid \"([^\"]*)\" in the 'userid' field$")
    public void userEntersInvalidInTheUseridField(String username)  {
        new LoginPage().enterUsername(username);
    }

    @And("^User enters invalid \"([^\"]*)\" in the 'password' field$")
    public void userEntersInvalidInThePasswordField(String password)  {
        new LoginPage().enterPassword(password);
    }

    @And("^User clicks on the login button$")
    public void userClicksOnTheLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^User will see the error message displayed \"([^\"]*)\"$")
    public void userWillSeeTheErrorMessageDisplayed(String errormessage)  {
        new LoginPage().verifyErrorMessage(errormessage);
    }
}
