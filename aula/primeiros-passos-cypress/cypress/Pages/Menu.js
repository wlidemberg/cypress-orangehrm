class Menu {
    selectorList() {
        const selectors = {
            buttonMyInfo: '[href="/web/index.php/pim/viewMyDetails"]',
            performance: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }
        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectorList().buttonMyInfo).click()
    }

    accessPerformance(){
        cy.get(this.selectorList().performance).click()
    }
}
export default Menu;