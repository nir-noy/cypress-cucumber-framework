import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('User Opens Google Homepage', () => {
    cy.visit('https://www.google.com');
})

And(/^Verifies the title of the homepage$/, () => {
	cy.title().should('eq', 'Google');
});

When(/^User enters "([^"]*)" in the search box$/, (args1) => {
	cy.get('input[title="Search"]').type(args1);
});

Then(/^Cliks on the search button$/, () => {
	cy.get('input[title="Search"]').type('{enter}');
});

And(/^Verify the title of the search result page$/, () => {
	cy.title().should('eq', 'BCCI - Google Search');
});
