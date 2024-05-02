import data from '../fixtures/logincreds.json'

describe('Understanding Fixtures',function ()  {

    before(function () {
        cy.fixture('addemployee').then(function (data) {
          this.data = data;
        })
      })

    it('Validate register flow ', function ()  {
     
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
