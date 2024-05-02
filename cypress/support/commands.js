// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.Commands.add('login', () => {

   cy.get('input[name="username"]').type(Cypress.env('username'))

   cy.get('input[name="password"]').type(Cypress.env('password'))

   cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('addjobtile', (title, description) => {

   cy.contains('Admin').click()
   cy.contains('Job').click()
   cy.contains('Job Titles').click()
   cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
   cy.get('input[class="oxd-input oxd-input--active"]').last().type(title)
   cy.get('textarea[placeholder="Type description here"]').type(description)
   cy.get('button[type="submit"]').click()

})

Cypress.Commands.add('addEmpoyee', (firstname, lastname) => {

   cy.get('input[name="firstName"]').type(firstname)
   cy.get('input[name="lastName"]').type(lastname)
   cy.get('button[type="submit"]').click()
   cy.contains('Successfully Saved').should('be.visible')

})





