package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    /**
     * logger defined to print log
     */
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "user-name")
    WebElement userName;

    @CacheLookup
    @FindBy(id = "password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;

    @CacheLookup
    @FindBy(css = "h3[data-test='error']")
    WebElement error;

    public void enterUsername(String user){
        log.info("entering username : "+ user);
        doSendTextToElement(userName, user);
    }

    public void enterPassword(String pass){
        log.info("entering password : "+ pass);
        doSendTextToElement(password, pass);
    }

    public void clickOnLoginButton(){
        log.info("Click on Logging Button : "+ loginButton.getText()+ "<br>");
        doClickOnElement(loginButton);
    }

    public void verifyErrorMessage(String errorMessage){
        log.info("Verifying Error Message : "+ errorMessage+ "<br>");
        Assert.assertTrue(error.getText().equalsIgnoreCase(errorMessage));
    }
}
