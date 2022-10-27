class BasePage{
// constructor

    constructor(driver){
        //o drive interno se conecta com o drive externo (conversor)
        this.driver = driver;
    }

    async lerTituloGuia(){
        return await this.driver.getTitle();
    }


}

module.exports = BasePage;