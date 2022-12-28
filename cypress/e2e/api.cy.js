/// <reference types="cypress"/>

import Ajv from "ajv"
const ajv = new Ajv()

describe('Validar Schema', () => {
    it('Faz requisição', () => {
        cy.request('GET', '/report/v1').then((response) => {
            cy.fixture('covidSchema').then((covidSchema) => {

                //Compila o schema e guarda em cache
                const validate = ajv.compile(covidSchema)

                //Valida o body retornado e compara com o schema
                const valid = validate(response.body)

                //Se ocorrer erro, mostra o erro no console
               try {
                console.log(validate.errors)
                cy.log('Mensagem:', validate.errors[0].message) 
                cy.log('Path do schema: ', validate.errors[0].schemaPath)
                cy.get(validate.errors[0].message).should('be.empty')

               
                    cy.writeFile(
                        'cypress/evidencias/CT-01.json', 
                        JSON.stringify(response.body))
                }
                catch (ex){
                    cy.log(ex)
                }
            })
        })
    })
})