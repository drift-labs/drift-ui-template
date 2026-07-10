Feature: The application works only with the Sepolia network

    Scenario: The user creates account and deposit using the Phatom wallet connected to Devnet network
        Given A user with phantom installed connected to devnet network - Test 1 Scenario 1
        Then The home page should show a connected text to indicated wallet is connected - Test 1 Scenario 1
        When The user accesses the order page - Test 1 Scenario 1
        Then The user page shows the Create Account & Deposit label - Test 1 Scenario 1
        When A user fills the create account and deposit form and clicks submit - Test 1 Scenario 1
        Then The request should be successful - Test 1 Scenario 1
   