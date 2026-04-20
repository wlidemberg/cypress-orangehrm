class MyInfoPages {
    selectorList(){
        const selectors = {
            firstName: '[name="firstName"]',
            middleName: '[name="middleName"]',
            lastName: '[name="lastName"]',
            genericField: '.oxd-input--active',
            formRow: '.oxd-form-row',
            input: 'input',
            select: '.oxd-select-text-input',
            radioOption: '.oxd-radio-input',
            selectOption: '.oxd-select-option',
            btnClosePicker: '.--close',
            btnDefault: '.oxd-button',
            msgSuccess: '.oxd-toast',
        }
        return selectors
    }



    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorList().firstName).should('be.visible').clear().type(firstName)
        cy.get(this.selectorList().middleName).clear().type(middleName)
        cy.get(this.selectorList().lastName).clear().type(lastName)     
    }

    fillEmployee(employeeId, otherId, driverLicense, licenseExpiryDate){
        cy.get(this.selectorList().formRow).eq(1).find(this.selectorList().input).eq(0).clear().type(employeeId)
        cy.get(this.selectorList().formRow).eq(1).find(this.selectorList().input).eq(1).clear().type(otherId)
        cy.get(this.selectorList().formRow).eq(1).find(this.selectorList().input).eq(2).clear().type(driverLicense)
        cy.get(this.selectorList().formRow).eq(1).find(this.selectorList().input).eq(3).clear().type(licenseExpiryDate)
        cy.get(this.selectorList().btnClosePicker).click() // Fechar calendário
    }

    fillPersonalData(nationality, maritalStatus, dateOfBirth, gender, militaryService, smoker){
        cy.get(this.selectorList().formRow).eq(2).find(this.selectorList().select).eq(0).click()
        cy.contains(this.selectorList().selectOption, nationality).click()
        cy.get(this.selectorList().formRow).eq(2).find(this.selectorList().select).eq(1).click()
        cy.contains(this.selectorList.selectOption, maritalStatus).click()
        cy.get(this.selectorList().formRow).eq(2).find(this.selectorList().input).eq(0).clear().type(dateOfBirth)
        cy.get(this.selectorList().btnClosePicker).click()
        cy.get(this.selectorList().formRow).eq(2).find(this.selectorList().radioOption).eq(0).click()
        cy.get(this.selectorList().btnDefault).eq(1).click()

        cy.get(this.selectorList().msgSuccess).should('be.visible').and('contain', 'Success')
    }

    fillCustomFields(bloodType, test_field){
        cy.get(this.selectorList().formRow).eq(3).find(this.selectorList().select).eq(0).click()
        cy.contains(this.selectorList().selectOption, bloodType).click()
        cy.get(this.selectorList().formRow).eq(3).find(this.selectorList().input).clear().type(test_field)
        cy.get('.oxd-form-actions').eq(1).find(this.selectorList().btnDefault).click()
        
        cy.get(this.selectorList().msgSuccess).should('be.visible').and('contain', 'Success')
    }

    fillAttachments(){
        cy.get('.orangehrm-action-header').find(this.selectorList().btnDefault).click()
        cy.get('.oxd-file-button').click()
        cy.get('input[type="file"]').selectFile('cypress/fixtures/files/test.png', {force: true})
        cy.get('.oxd-file-input-div').should('contain', 'test.png')
        cy.get(this.selectorList().formRow).eq(5).find('.oxd-textarea').clear().type('Arquivo anexado!')
        cy.get(this.selectorList().btnDefault).eq(3).click()
    }
}
export default MyInfoPages;