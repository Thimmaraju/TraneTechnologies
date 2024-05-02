
// import data from "../fixtures/logincreds.json"


// describe('Verify Login functionality', () => {

  
//   beforeEach("before Each",()=>{

//     cy.visit('/web/index.php/auth/login')

//     cy.viewport(1900,1200)
//   })

//   before("before all",()=>{

//     cy.log("Execution Started")
//   })

//   after("after all",()=>{

//     cy.log("Execution Completed")
//   })

//   afterEach("after Each",()=>{

//     cy.log("Test body execution completed")
//   })

//   it.only('Verify Login with Valid credentials', () => {
  
 
//      cy.login("Admin", "admin123")

//      //assertions

//      cy.contains('Time at Work').should("be.visible")

//      cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//      //or 

//      cy.url().should("include", 'index.php/dashboard/index')

//   })

//   it('Verify Login with Valid username and Invalid password', () => {



//      cy.get('input[name="username"]').type(data.username)

//      cy.get('input[name="password"]').type(data.wrongpassword)

//      cy.get('button[type="submit"]').click()

//      cy.contains('Invalid credentials').should("be.visible")
//   })


//   it('Verify Login with Invalid username and valid password', () => {

   

//     cy.get('input[name="username"]').type(data.wrongusername)

//     cy.get('input[name="password"]').type(data.password)

//     cy.get('button[type="submit"]').click()

//     cy.contains('Invalid credentials').should("be.visible")
    
//   })

//   it('Verify Login with Invalid username and invalid password', () => {


//     cy.get('input[name="username"]').type(data.wrongusername)

//     cy.get('input[name="password"]').type(data.wrongpassword)

//     cy.get('button[type="submit"]').click()

//     cy.contains('Invalid credentials').should("be.visible")
//   })


// })

