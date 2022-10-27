const {Builder, By} = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chromedriver = require("chromedriver");
const assert = require("chai").assert;

describe(" Resgistro da Blaze ", () => {
    let driver;

    beforeEach( async ()=>{

        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().setTimeouts({implicit: 30000})
    });

    afterEach( async () => {
        await driver.quit();
    });

    it(" Resgistrar usuário na BlazeDemo", async () => {

        await driver.get("https://blazedemo.com/register");

        await driver.findElement(By.id("name")).sendKeys("Sarah");
        await driver.findElement(By.id("company")).sendKeys("estudante");
        await driver.findElement(By.id("email")).sendKeys("sarah.carvalho__@hotmail.com");
        await driver.findElement(By.id("password")).sendKeys("123456");
        await driver.findElement(By.id("password-confirm")).sendKeys("123456")
        await driver.findElement(By.css(".btn-primary")).click();
    })
})