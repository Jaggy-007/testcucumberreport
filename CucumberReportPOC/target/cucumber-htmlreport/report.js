$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Login/Logout feature",
  "description": "I want to use this template for my feature file",
  "id": "login/logout-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 33,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login/logout-feature;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User enters name1 and 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 101342333,
  "status": "passed"
});
formatter.match({
  "location": "teststeps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 43232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "teststeps.user_enters_name_and(int,int)"
});
formatter.result({
  "duration": 1697178,
  "status": "passed"
});
formatter.match({
  "location": "teststeps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 35955,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Successful LogOut",
  "description": "",
  "id": "login/logout-feature;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "teststeps.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 58213,
  "status": "passed"
});
formatter.match({
  "location": "teststeps.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 48796,
  "status": "passed"
});
});