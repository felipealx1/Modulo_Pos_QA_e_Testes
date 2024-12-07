/// <reference types="cypress"/>

describe("Testes de Back", () => {

    it("TC01 - Requisição GET", () => {
        cy.request("https://httpbin.org/get")
        .should(function(response){
            const { status, statusText } = response;
            expect(status).to.be.equal(200);
            expect(statusText).to.be.equal('OK');
        })

    })


    it("TC02 - Requisição POST", () => {
        cy.request({
            method: 'POST', 
            url:'https://httpbin.org/post',
            body: {
                name:'Rafael',
                age: '30'
            }
        }).should(function(response){
            const { status, statusText } = response;
            expect(status).to.be.equal(200);
            expect(statusText).to.be.equal('OK');
        })
        

    })

    //ou essa opçao para testar o post
    it("TC03 - Requisição POST", () => {
        cy.request({
            method: 'POST', 
            url:'https://httpbin.org/post',
            body: {
                name:'Rafael',
                age: '30'
            }
        }).its('body').should('not.be.empty')
        

    })


    //it("TC04 - Requisição DELETE", () => {
       // cy.request({
           // method: 'DELETE',
           // url: 'https://httpbin.org/delete', // URL do endpoint DELETE
            //body: {
               //// id: '123', // Dados opcionais (dependendo da API)
            //},
            //headers: {
                //'Content-Type': 'application/json' // Define o tipo de conteúdo
            //}
        //}).then((response) => {
            // Validações da resposta
            //expect(response.status).to.eq(200); // Verifica se o status é 200
            //expect(response.body).to.have.property('data'); // Verifica a presença de algum dado no corpo
            ////.log(JSON.stringify(response.body)); // Exibe o corpo da resposta no log do Cypress
       // });
    //});
    
})

