Feature: Verify Login functionality

    login functionality positive and negative tests

Background: Launch app

  Given User launch the application 

Scenario: Verify login with valid credentials
  When User enter user name as "Admin" and password as "admin123"
  And  User clicks on login button
  Then User should be naivigated to dashbaord 

Scenario: Verify login with valid username and Invalid password
  When User enter user name as "Admin" and password as "lgtjiotj"
  And  User clicks on login button
  Then User get login error message 

Scenario: Verify login with invalid username and valid password
  When User enter user name as "guherg" and password as "admin123"
  And  User clicks on login button
  Then User get login error message 


Scenario: Verify login with invalid username and invalid password
  When User enter user name as "rghj" and password as "wuh"
  And  User clicks on login button
  Then User get login error message 