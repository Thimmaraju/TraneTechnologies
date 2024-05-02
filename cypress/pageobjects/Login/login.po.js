
class loginPage{


    orangeHrmLogo(){

        return 'img[alt="company-branding"]'
    }



     entercreds(inputfiled){

        return "input[name="+inputfiled+"]"
     }

    loginBtn(){

        return 'button[type="submit"]'
    }

    loginerrorMessage = 'Invalid credentials'

    loginwithcreds(value1, value2){

        cy.xpath('//input[@name="username"]').type(value1)

        cy.get(this.entercreds("password")).type(value2)

        cy.get(this.loginBtn()).click()
    }

}

const login = new loginPage()

export default login