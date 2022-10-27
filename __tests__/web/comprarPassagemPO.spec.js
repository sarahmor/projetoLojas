// bibliotecas e importações
//Importa a HomePage
const HomePage = require("../pageObjects/HomePage.spec");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("chai").assert;
const chromedriver = require("chromedriver");

//Todo: massa de teste
describe("Comprar Passagem via BlazeDemo - Page Object",()=>{
    let driver; // objeto que será  cria um objeto para fao selenium
    //cria um objeto para fazer uma configuração avançada do driver
    const chOptions = new chrome.Options();

    // inicialização
    beforeEach(() => {
        driver = new webdriver.Builder()  //instancia o selenium
            .forBrowser("chrome")
            .setChromeOptions(chOptions)
            .build() // ir em frent ee execultar
        driver.manage().setTimeouts({implicit: 30000}); // espera implicita
        driver.manage().window().maximize(); //maximizar a janela

    });
    // finalização
    afterEach(() => {
        driver.quit();  // encerra o objeto do selenium
    });

    // testes
    it("Comprar Passagem PO", async () => {
        await driver.get("https://www.blazedemo.com");
        const homePage = new HomePage(driver); // instancia a homePage
        await homePage.selecionarOrigemDestinoVoo("Boston", "Dublin");
        assert.equal(await homePage.lerTituloGuia(), "BlazeDemo - reserve");
        await homePage.driver.sleep(3000); // pausa para visualizar
    
    });

});

// execução do Teste