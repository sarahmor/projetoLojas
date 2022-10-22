const supertest = require("supertest");
const assert = require("chai").assert;

const request = supertest("https://petstore.swagger.io/v2");
const petId = 990451804;

describe("Petstore Swagger - Store", () => {
  

    it("POST Store", () => {
        
        const jsonFile = require("../../vendors/store1.json");
        let id = jsonFile.id

        return request
            .post("/store/order")
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, id);
                assert.equal(resposta.body.petId, petId);
                assert.equal(resposta.body.quantity, 1);
                assert.equal(resposta.body.shipDate, "2022-10-19T14:44:24.927+0000");
                assert.equal(resposta.body.status, "placed");
                assert.equal(resposta.body.complete, true);

            });
    });

    it("GET Store", () => {
        
 
        let petId = 990451804;
        const orderId = 2;

        return request
        .get("/store/order/" + orderId)
        .then((resposta)=>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.petId, petId);
            assert.equal(resposta.body.quantity, 1);
            assert.equal(resposta.body.shipDate, "2022-10-19T14:44:24.927+0000");
            assert.equal(resposta.body.status, "placed");
            assert.equal(resposta.body.complete, true);
        });



    })


});


