// import data from "../fixtures/logincreds.json"

// describe('Verify Login functionality', () => {

//   it.only('Verify Login with Valid credentials', () => {
  
//      cy.visit('/web/index.php/auth/login')

//      cy.get('input[name="usernam0e"]').type(data.username)

//      cy.get('input[name="password"]').type(data.password)

//      cy.get('button[type="submit"]').click()

//      //assertions

//      cy.contains('Time at Work').should("be.visible")

//      cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//      //or 

//      cy.url().should("include", 'index.php/dashboard/index')

//   })

//   it('Verify Login with Valid username and Invalid password', () => {

//     cy.visit('/web/index.php/auth/login')

//      cy.get('input[name="username"]').type(data.username)

//      cy.get('input[name="password"]').type(data.wrongpassword)

//      cy.get('button[type="submit"]').click()

//      cy.contains('Invalid credentials').should("be.visible")
//   })


//   it('Verify Login with Invalid username and valid password', () => {

//     cy.viewport(250,550)

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get('input[name="username"]').type(data.wrongusername)

//     cy.get('input[name="password"]').type(data.password)

//     cy.get('button[type="submit"]').click()

//     cy.contains('Invalid credentials').should("be.visible")
    
//   })

//   it('Verify Login with Invalid username and invalid password', () => {

//     cy.viewport('ipad-2',"landscape")
    
//     cy.visit('/web/index.php/auth/login')

//     cy.get('input[name="username"]').type(data.wrongusername)

//     cy.get('input[name="password"]').type(data.wrongpassword)

//     cy.get('button[type="submit"]').click()

//     cy.contains('Invalid credentials').should("be.visible")
//   })


// })