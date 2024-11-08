const { fundamentals } = require("./pages/fundamentals.cy")
const localUrl = Cypress.config('localUrl');
describe('Next app testing',()=>{
    const fundamentalsPage = new fundamentals();
    beforeEach(()=>{
        cy.viewport(1920,1080);
        cy.visit(localUrl+'/fundamentals');
    })
    it("Checking the text of the H1",()=>{
        fundamentalsPage.header();
    })
})