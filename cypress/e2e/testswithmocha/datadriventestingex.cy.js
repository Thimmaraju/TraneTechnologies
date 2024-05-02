const availablefixtures = [
    {
      "name": "addemployee",
      "context": "1"
    },
    {
      "name": "addemployeeraju",
      "context": "2"
    },
    {
      "name": "addemployeeTejasri",
      "context": "3"
    }
  ]
  
  import data from "../fixtures/logincreds.json"
  
  describe("verify addemployee functionality", function () {
  
    availablefixtures.forEach((afixture) => {
      describe(afixture.context, () => {
        //Mostly used for Setup Part
        before(function () {
          cy.fixture(afixture.name).then(function (data) {
            this.data = data;
          })
        })
  
        it('Cypress Test Case - add employee', function () {
        
         
            cy.visit('/web/index.php/auth/login')

            cy.get('input[name="username"]').type(data.username)
    
            cy.get('input[name="password"]').type(data.password)
    
            cy.get('button[type="submit"]').click()
    
            //assertions
    
            cy.contains("PIM").should("be.visible")
    
            cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
            //or 
    
            cy.url().should("include", 'index.php/dashboard/index')
    
            cy.contains("PIM").click()
    
            cy.contains("Add Employee").click()
    
            cy.get('input[name="firstName"]').type(this.data.firstname)
            cy.get('input[name="lastName"]').type(this.data.lastname)
    
            cy.get('button[type="submit"]').click()
            cy.contains('Successfully Saved').should('be.visible')
        })
  
      })
    })
  })