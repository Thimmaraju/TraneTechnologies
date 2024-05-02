describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.xpath('//input[@name="username"]').type("Admin", {delay:0})
      cy.get('input[type="password"]').type("admin123{enter}")

      cy.contains("PIM").click()

      cy.get('input[type="checkbox"]').check(["0", "1"],{force:true})

      cy.get('input[type="checkbox"]').its('length').then((len)=>{

        cy.log(len)
      })

    })
  })