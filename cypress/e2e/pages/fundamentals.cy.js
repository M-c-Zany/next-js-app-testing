import { locators } from "../../support/locators";

export class fundamentals{
    header(){
        cy.get(locators.fundamentalsHeader).should('contain.text','Testing Fundamentals');
        cy.get(locators.fundamentalsHeader).should('have.text','Testing Fundamentals');
        cy.get(locators.fundamentalsHeader).contains(/Testing Fundamentals/i);
    }
}