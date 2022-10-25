const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
require("chromedriver");


describe("Google", () => {
    let driver;

    // precisamos de 3 métodos 
    // Metodo de inicialização
    beforeEach(() => {
        driver = new webdriver.Builder() // instanciou o objeto do Selenium
        .forBrowser("chrome")
        .build()
    })
    // Metodo de Finalização
    afterEach(() => {
        driver.quit();
    })
    // Metodos de Testes (cada it é um teste)
    it("Consultar Google", async() => {
    //executa
        await driver.get("https://google.com.br")
        await driver.findElement(By.name("q")).sendKeys("mousse de chocolate" + webdriver.Key.ENTER)
    // valida
        assert.equal(await driver.getTitle(), "mousse de chocolate - Pesquisa Google")
    })
})