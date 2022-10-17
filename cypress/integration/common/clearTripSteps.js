import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('User Opens the application Homepage', () => {
    cy.openURL('https://www.cleartrip.com');
})

When('User closes the Login modal', () => {
    cy.get('div.pt-6.pb-6.flex.flex-top.flex-between > div.px-1.flex.flex-middle.nmx-1.pb-1 > svg').click();
})

And('Clicks on Flights tab', () => {
    cy.xpath("//li[@class='bg-secondary-100 br-6']").click();
})

Then('Verify Flight search page is displayed', () => {
    cy.xpath("//h1[@class='fs-9 c-neutral-900 fw-600']").contains('Search flights');
    cy.xpath("//h2[@class='ml-1 fs-4 c-neutral-900 fw-500']").contains('Enjoy hassle free bookings with Cleartrip');
})

When(/^User closes the upgrade pop up container$/, () => {
	cy.get('svg.mt-3.mr-3.r-0.p-absolute.c-pointer > path').click();
});

And(/^User enters Origin Airport$/, () => {
	cy.get("input[placeholder='Where from?']").click().type('BLR');
});

And(/^User enters Destination Airport$/, () => {
	cy.get("input[placeholder='Where to?']").click().type('BOM');
});

