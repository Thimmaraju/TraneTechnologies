describe('Understanding checkbox radio dropdown', () => {
    it('Test 1', () => {
     

        cy.visit('https://register.rediff.com/register/register.php')

        cy.get('input[name*="chk_altemail"]').check()

        cy.get('input[name*="chk_altemail"]').should("be.checked")

       // cy.wait(5000)

        cy.get('input[name*="chk_altemail"]').uncheck()

        cy.get('input[name*="chk_altemail"]').should("not.be.checked")

        //Radio button
        cy.get('input[value="m"]').should('be.checked')
        cy.get('input[value="f"]').check().should('be.checked')
        cy.get('input[value="m"]').should('not.be.checked')

        //Drop down 

        //text 

        cy.get('select[name^="DOB_Month"]').select('JUL')

        cy.wait(3000)
        //value

        cy.get('select[name^="DOB_Month"]').select('10')

        //index 

        cy.get('select[name^="DOB_Month"]').select(3)


    })

})