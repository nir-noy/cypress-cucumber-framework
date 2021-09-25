Feature: Verify Sample Test

    Scenario: Performing multiple tasks in Google Homepage

        Given User Opens Google Homepage
        And Verifies the title of the homepage
        When User enters "BCCI" in the search box
        Then Cliks on the search button
        And Verify the title of the search result page
