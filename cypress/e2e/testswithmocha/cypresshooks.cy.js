

describe('Understanding the Hooks', () => {

    before("before all",()=>{

      cy.log("This will run before all tests")
    })


    beforeEach("before Each",()=>{

        cy.log("This will run before Each tests")
      })


      after("after all",()=>{

        cy.log("This will run After all tests")
      })
  
  
      afterEach("after Each",()=>{
  
          cy.log("This will run After Each tests")
        })
    it('test 1', () => {

        cy.log("1st test case")

    })


    it('test 2', () => {

        cy.log("2nd test case")

    })

    it('test 3', () => {

        cy.log("3r test case")

    })
})