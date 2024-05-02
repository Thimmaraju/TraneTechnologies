import data from "../fixtures/logincreds.json"
import addjob from "../fixtures/addjobtitle.json"

describe('template spec', () => {
    it('passes', () => {
      
        cy.visit("/")

        cy.login()
        cy.addjobtile(addjob.title, addjob.description)
    })

})