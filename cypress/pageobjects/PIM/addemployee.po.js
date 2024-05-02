class addEmployeePage{

    addemployeeSubMenu(){

        return 'Add Employee'
    }

    firstnameInput = 'input[name="firstName"]'
    

    lastnameInput(){

        return 'input[name="lastName"]'
    }

    saveBtn(){
        
        return 'button[type="submit"]'
    }

    sucessmessage(){

        return 'Successfully Saved'
    }
}

const addemployee = new addEmployeePage()

export default addemployee