const { Builder, By} = require("selenium-webdriver");
const {assert} = require("chai");
const chromedriver = require("chromedriver")
const webdriver = require("selenium-webdriver");

describe(" Página de login BlazeDemo", () => {
    
    let driver

    beforeEach( async function () {

        driver = await new webdriver.Builder().forBrowser("chrome").build();
        await driver.manage().setTimeouts({ implicit: 30000})

    })

    afterEach( async function () {
        await driver.quit();
    })

    it( " Fazer Login na BlazeDemo", async () => {

        await driver.get("https://blazedemo.com/login");
        await driver.findElement(By.id("email")).sendKeys("sarah.carvalho__@hotmail.com");

        await driver.findElement(By.id("password")).sendKeys("123456");

        driver.sleep(30000)
        await driver.findElement(By.css("[name='remember']")).click()

        await driver.findElement(By.css(".btn-primary")).click()

        assert.equal( await driver.get("https://blazedemo.com/home"))
    })
})