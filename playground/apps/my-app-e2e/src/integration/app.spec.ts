/// <reference types="cypress"/>
import { getGreeting } from '../support/app.po';

describe('my-app', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        cy.login('my-email@something.com', 'myPassword');

        getGreeting().contains('Welcome');
    });
});
