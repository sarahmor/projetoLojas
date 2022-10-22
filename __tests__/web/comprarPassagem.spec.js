const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Comprar Passagem', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Comprar Passagem', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1360, height: 728 })
    await driver.findElement(By.name("fromPort")).click()
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
    }
    // await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'New York']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    //await driver.findElement(By.id("cardType")).click()
    {
      const dropdown = await driver.findElement(By.id("cardType"))
      await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
    }
    await driver.findElement(By.id("creditCardNumber")).click()
    await driver.findElement(By.id("creditCardMonth")).click()
    {
      const element = await driver.findElement(By.id("creditCardMonth"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("creditCardMonth")).sendKeys("09")
    //await driver.findElement(By.id("creditCardYear")).click()
    await driver.findElement(By.id("creditCardYear")).click()
    await driver.findElement(By.id("creditCardYear")).sendKeys("2025")
    await driver.findElement(By.id("rememberMe")).click()
    await driver.findElement(By.css(".btn-primary")).click()
  })
})
