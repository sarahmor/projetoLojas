// Importações / referências as bibliotecas
const supertest = require("supertest");
const assert = require("chai").assert;

const petId = 990451804;  // id do pet

describe("Petstore Swagger - Pet", () => {
    // Definir o caminho do serviço / API - base URL
    const request = supertest("https://petstore.swagger.io/v2");

    // Função POST == Creat == Incluir
    it("POST Pet", () => {
        // Onde está o json com os dados do Pet
        //configura
        const jsonFile = require("../../vendors/pet1.json");

        return request          // chamada para a requisição
            .post("/pet")       // endpoint / função chamada
            //Executa
            .send(jsonFile)     // body / corpo da requisição
            //Valida
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // comunicação ok
                assert.equal(resposta.body.id, petId);  // valida o Id do pet
                assert.equal(resposta.body.name, "Lula"); // nme do pet
                assert.equal(resposta.body.status, "available"); // se esta dionível

            });
    });

    // função GET == Reach / Read / Research == Consultar
    it(" GET Pet ", () => {
        return request      // chamar para a requisição
            .get("/pet/" + petId)   // consulta pelo Id do pet
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // comunicação ok
                assert.equal(resposta.body.id, petId);  // valida o Id do pet
                assert.equal(resposta.body.name, "Lula"); // nme do pet
                assert.equal(resposta.body.status, "available"); // se esta dionível
            });
    });
    
    //função de Put == Update == Alterar
    it(" PUT Pet ", () => {
        const JsonFile = require("../../vendors/pet2.json");
        return request
            .put("/pet")
            .send(JsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.name, "Lula");
                assert.equal(resposta.body.status, "solded");
            })
    });

    // função Delete == Excluir
    it("DELETE Pet", () => {
        return request
            .delete("/pet/" + petId)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);

            });
    });

});