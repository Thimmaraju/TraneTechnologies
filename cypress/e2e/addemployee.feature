Feature: Verify add employee functionality


  Scenario Outline: Verify add employee with mandotory deatils

    Given User launch the application
    When User enter user name as "Admin" and password as "admin123"
    And  User clicks on login button
    Then User should be naivigated to dashbaord
    And User clicks on PIM Menu
    And User clicks on Add Employee submenu
    And Enter the firstname "<firstname>" and lastname "<lastname>"
    And User clicks on Save button
    Then User should get successfully saved message

    Examples:
      | firstname | lastname |
      | Raju      | G        |
      | Keethana  | G        |
      | Nirmal    | Kumar    |