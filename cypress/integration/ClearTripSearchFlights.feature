Feature: Cleartrip Search Flights Functionality

    Scenario: One way flights search

        Given User Opens the application Homepage
        When User closes the Login modal
        And Clicks on Flights tab
        Then Verify Flight search page is displayed
        # When User closes the upgrade pop up container
        And User enters Origin Airport
        And User enters Destination Airport
