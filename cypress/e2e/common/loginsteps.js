import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";


Given('User launch the application', () => {
    cy.visit('/web/index.php/auth/login')
  })

  When('User enter user name as {string} and password as {string}', (username, password) => {
    cy.get('input[name="username"]').type(username)

   cy.get('input[name="password"]').type(password)
  })

  And('User clicks on login button', () => {
    cy.get('button[type="submit"]').click()
    
  })

  
  Then('User should be naivigated to dashbaord', () => {
   
     cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    //or 

    cy.url().should("include", 'index.php/dashboard/index')
    
  })


    
  Then('User get login error message', () => {
   
     cy.contains('Invalid credentials').should("be.visible")
   
 })


