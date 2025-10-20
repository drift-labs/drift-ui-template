Feature: The application works only with the Sepolia network

    Scenario: The user accesses the page with Phatom connected to Devnet network
        Given A user with phantom installed connected to devnet network - Test 2 Scenario 1
        Then The home page should show a connected text to indicated wallet is connected - Test 2 Scenario 1
        When The user accesses the user page - Test 2 Scenario 1
        Then The order page shows the Place Perpetual Order label - Test 2 Scenario 1
        When A user fills the place limit order form and clicks submit - Test 2 Scenario 1
        Then The request should be successful - Test 2 Scenario 1
