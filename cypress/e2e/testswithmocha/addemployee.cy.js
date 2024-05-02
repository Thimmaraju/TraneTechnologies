
import addemployeedata from "../fixtures/addemployee.json"
import login from '../pageobjects/Login/login.po'
import addemployee from "../pageobjects/PIM/addemployee.po"
import dashbaord from "../pageobjects/dashBoard.po"

describe('Verify Add Employee Functionality', () => {


  it('Verify Add employee with mandotoryu details', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")

    // cy.visit('/web/index.php/auth/login')

    // login.loginwithcreds(Cypress.env('username'), Cypress.env('password'))

    // //assertions

    // cy.contains(dashbaord.timeatworkcard()).should("be.visible")

    // cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // //or 

    // cy.url().should("include", 'index.php/dashboard/index')

    // cy.contains(dashbaord.pimMenu()).click()

    // cy.contains(addemployee.addemployeeSubMenu()).click()

    cy.get(addemployee.firstnameInput).type(addemployeedata.firstname)
    cy.get(addemployee.lastnameInput()).type(addemployeedata.lastname)

    cy.get(addemployee.saveBtn()).click()
    cy.contains(addemployee.sucessmessage()).should('be.visible')



  })


})