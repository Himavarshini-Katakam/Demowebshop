$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Hima/java_capgemini/DemoWebShopMaven/src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is on home page of the Demo Web Shop and Login link is avaialble.",
  "description": "user has also clicked on the login link",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Succesful login on entering valid Email and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SuccessfulLogin"
    }
  ]
});
formatter.step({
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the valid email and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_the_valid_email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.clicks_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
});