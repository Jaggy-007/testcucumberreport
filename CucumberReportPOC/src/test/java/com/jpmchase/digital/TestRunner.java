package com.jpmchase.digital;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(format ={"pretty", "html:target/cucumber-htmlreport","json:target/cucumber-report.json"} ,features="src/test/resource",glue="com/jpmchase/digital",tags="@Login")
 

public class TestRunner {

}
