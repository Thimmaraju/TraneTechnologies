import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


And('User clicks on PIM Menu', () => {

    cy.contains('PIM').click()

})


And('User clicks on Add Employee submenu', () => {

    cy.contains('Add Employee').click()

})
And('Enter the firstname {string} and lastname {string}', (firstname, lastname) => {

    cy.get('input[name="firstName"]').type(firstname)
    cy.get('input[name="lastName"]').type(lastname)

})

And('User clicks on Save button', () => {

    cy.get('button[type="submit"]').click()

})

Then('User should get successfully saved message', () => {

    cy.contains('Successfully Saved').should('be.visible')

})






