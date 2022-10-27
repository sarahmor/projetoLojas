//Bibliotecas
//Importar a classe mãe / super classe
const BasePage = require("./BasePage.spec");
//importar o By do selenium
const By = require("selenium-webdriver").By;

// Criar a classe HomePage a partir da classe BasePage
class HomePage extends BasePage {

    // Monta a estrutura de dados da classe e esta recebendo o selenium
    constructor(driver){
        super(driver) //chama a super classe BasePage e passa Selenium
        //Mapeamos cada elemento da tela (no caso 4 deles)
        this.linkDaSemana = By.linkText("destination of the week! The Beach!"); 
        this.dropdownOrigem = By.name("fromPort");
        this.dropdownDestino = By.name("toPort");
        this.btnFindFlights = By.css(".btn-primary");
    }

    // Criar ações baseadas no elementos mapeados

    //clica na promoção da semana
    async consultarDestinoDaSemana(){
        await this.driver.findElement(this.linkDaSemana).click();
    }

    //selecionar a origem e destino de um voo
    async selecionarOrigemDestinoVoo(origem,destino){
        // selecionar origem
        //Primeiro seleciona o dropDown / combo origem 
        let  ddOrigem = await this.driver.findElement(this.dropdownOrigem);
        //segundo lugar, seleciona a opção do dropdown / combo    
        await ddOrigem.findElement(By.css(`[value="${origem}"]`)).click();

        // selecionar destino
        let ddDestino = await this.driver.findElement(this.dropdownDestino);
        await ddDestino.findElement(By.css(`[value="${destino}"]`)).click();

        //clicar no botão FindFlights
        await this.driver.findElement(this.btnFindFlights).click();
    }

}

module.exports = HomePage;