/// <reference types="cypress"/>
import { getAddTodoButton, getGreeting, getTodos } from '../support/app.po';

describe('my-app', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display welcome message', () => {
        cy.login('my-email@something.com', 'myPassword');

        getGreeting().contains('Welcome my-app');
    });

    it('should display todos', () => {

        getTodos().then((elem) => {
            let initialLength = elem.length;
            getAddTodoButton()
                .should("be.visible")
                .click()
                .then(() => {
                    getTodos().should((t) => expect(t.length).equal(initialLength + 1));
                });
        });

    });
});
