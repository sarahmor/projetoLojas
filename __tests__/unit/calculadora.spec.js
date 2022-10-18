// IMPORTAÇÃO DA FUNÇÕES DA CALCULADORA
const calculadora = require("../../src/calculadora");

//IMPORTAÇÃO DO ARQUIVO DE MASSA PARA O TESTE DE DIVISÃO
const massaDivisaoJson = require("../../vendors/massaUnidade");

test("somar 2 + 3", () => {
    //1. configura
    //dados de entrada - Input
    const num1 = 2;
    const num2 = 3;
    //dados de saída - Output - Resultado Esperado
    const resultadoEsperado = 5;

    //1.2 - Referência a função que será testada (SUT)
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const resultadoAtual = somarDoisNumeros(num1, num2);

    // 2 / 3. Executa / Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test ("subtrair 5 - 2", () => {
    // configura
    const num1 = 5;
    const num2 = 2;
    const resultadoEsperado = 3;

    //executa
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoObtido = subtrairDoisNumeros(num1, num2);

    //valida
    expect(resultadoObtido).toBe(resultadoEsperado)
});

test ("multiplicar 9 * 3", () => {

    // CONFIRGURA
    const num1 = 9;
    const num2 = 3;
    const resultadoEsperado = 27;

    // VALIDA E EXECUTA JUNTOS
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    expect(multiplicarDoisNumeros(num1,num2)).toBe(resultadoEsperado)
});

// teste POSITIVO
test ("dividir 10 / 2", () => {

    const num1 = 10;
    const num2 = 2;
    const resultadoEsperado = 5;

    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado)
});

// teste NEGATIVO ou teste de exerção
// Valida a mensagem de erro 

test("Dividir por zero", () => {
   const num1 = 7;
   const num2 = 0;
   const resultadoEsperado = Infinity;

   const dividirDoisNumeros = calculadora.dividirDoisNumeros
   expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);

});

// Os dois testes de divisão acima na realidade são 1 e para isso resscreverei como se fosse um abaixo:
// data Driven Test = teste baseado em dados massa de dados{conjunto de dados para funcionar um programa},
// massa de tetes {além dos dados precisa de ter o resultado esperado}) para função dividirDoisNumeros
// Então o que faz uma massa de dados se tornar uma massa de teste é se ela tambpem contem os resultados esperados

//Lista / Array / Tuplas que contém a massa de teste
const massaDivisão = [
    [10,2,5],
    [7,0,Infinity],
    [9,3,3],
    [-10,2,-5],
    [-20,-5,4]
]

// Script que usa a massa de teste no formato lista
test.each(massaDivisão)("Dividir %f / %f,", (num1,num2, resultadoEsperado) => {
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1, num2,)).toBe(resultadoEsperado)
});

// SCRIPT que usa a massa de teste no formato JSON
test.each(massaDivisaoJson.array.map(item => [
    item.num1,
    item.num2,
    item.resultadoEsperado
]))("Divida %f / %f", (num1, num2, resultadoEsperado) => {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado)
});