// configura
//bibliotecas

const { Builder, By} = require("selenium-webdriver");
const  assert  = require("chai").assert
const chromedriver = require("chromedriver")


//executa
describe("Comprar Passagem via programação", () => {
    
    let driver         // Declaramos a variável/objeto que será o selenium
    
    //iniciar teste
    beforeEach( async function () {
        //Instanciar o Slenium WebDriver para controlar o Chrome
        driver = await new Builder().forBrowser("chrome").build()
        //Configurar o tempo de espera máxima do selenium e só depois que ele ja estiver sido colocado
        await driver.manage().setTimeouts({implicit: 30000})
        // Selenium vai esperar até 30 segundos pelo os elementos (espera implicita)
        
    })
    // Finalizar 
    afterEach(async function () {
        await driver.quit(); // Destruir o objeto do Slenium WebDriver
    
    })
    // testar
    it("Comprar Passagem WD", async () => {

        await driver.get("https://blazedemo.com/") // zbrir o site no chrome, sendo controlado pelo selenium
        await driver.findElement(By.name("fromPort")).click() //Clica no combo origem, mas poderia fazer sem clicar
        {
            const dropdown = await driver.findElement(By.name("fromPort"))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }

        {
            const dropdown = await driver.findElement(By.name("toPort"))
            await dropdown.findElement(By.xpath("//option[. = 'Berlin']")).click()
        }

        // clicar no botão Find Flights

        await driver.findElement(By.css(".btn-primary")).click()
        //valida
        //validar se foi para a página de reserva
        driver.sleep(5000)
        //assert.equal(driver.getTitle(), "BlazeDemo - reserve")
        assert.equal( await driver.getTitle(), "BlazeDemo - reserve")
    })

    

});
