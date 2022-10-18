const supertest = require("supertest");
const assert = require("chai").assert;

const userId = 101804045;
const username = "Morgs";
let token = ""


describe("Petstore Swagger - User", () => {
    
    const request = supertest("https://petstore.swagger.io/v2");

    // CRIAR USUÁRIO
    it("POST User", () => {
        
        const jsonFile = require("../../vendors/user1.json");

        return request 
            .post("/user")
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // se transmitiu e recebeu
                assert.equal(resposta.body.code, 200); // se cadastrou
                assert.equal(resposta.body.type, "unknown");
                assert.equal(resposta.body.message, userId);
            
            });
                
    });

    // CONSULTAR USUARIO
    it("GET User", () => {
        return request
            .get("/user/" + username)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, userId);
                assert.equal(resposta.body.password, "123456");
                assert.equal(resposta.body.phone, "61555555555");

            });
    });

    // ALTERAR USUARIO
    it("PUT User", () => {
        
        const jsonFile = require("../../vendors/user2.json");

        return request 
            .put("/user/" + username)
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // se transmitiu e recebeu
                assert.equal(resposta.body.code, 200); // se cadastrou
                assert.equal(resposta.body.type, "unknown");
                assert.equal(resposta.body.message, userId);
            
            });
    });

    // DELETAR USUARIO
    /*it("DELETE User", () => {
        return request
            .delete("/user/" + username)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);


            });
    });
    */

    //Login com a extração do token
    it("Login com extração do token", () => {
        const username = "Morgs";
        const password = "654321";
        
        return request
            .get("/user/login?username=" + username + "&password=" + password)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                token = resposta.body.message.substring(23);
                console.log("Token: " + token);

            });
    });


});