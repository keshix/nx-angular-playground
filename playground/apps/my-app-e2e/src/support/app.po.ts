export const getGreeting = () => cy.get('h1');
export const getQuestionForm = () => cy.get('[data-cy="question-form"]');
export const getQuestionTitleInput = () => cy.get('[data-cy="question-title-input"]');
export const getQuestionTitleInputErrorMessage = () => cy.get('[data-cy="question-title-input-error-message"]');
export const getQuestionDetailsFirstLink = () => cy.get('[data-cy="question-details-link"]').first();
export const getQuestionDetailsPageHeading = () => cy.get('[data-cy="question-details-heading"]');
