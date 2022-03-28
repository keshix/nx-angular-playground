/// <reference types="cypress"/>
import {
    getGreeting,
    getQuestionDetailsFirstLink,
    getQuestionDetailsPageHeading,
    getQuestionForm,
    getQuestionTitleInput,
    getQuestionTitleInputErrorMessage,
} from '../support/app.po';

describe('my-app', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        getGreeting().contains('Welcome to my Questions & Answers Tool');
    });

    it('should present a form to create questions', () => {
        getQuestionForm().should('be.visible');
    });

    it('should validate inputs', () => {
        getQuestionTitleInput()
            .type('foo')
            .clear()
            .then(() => {
                getQuestionTitleInputErrorMessage().should('be.visible');
                getQuestionTitleInput().type('foo');
            });
    });

    it('should show question details', () => {
        getQuestionDetailsFirstLink()
            .click()
            .then(() => {
                getQuestionDetailsPageHeading().should('be.visible');
            });
    });
});
