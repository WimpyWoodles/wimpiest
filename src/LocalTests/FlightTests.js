var Utils = require('../Utils');
var testPageURL = "https://www.clicktripz.com/test.php";
var flightsTab = "html/body/div[1]/div/ul[1]/li[4]/a";
var testHeader = "html/body/div[1]/div/h1";
var fromField = "//*[@id='city1']";
var toField = "//*[@id='city2']";
var departingField = "//*[@id='date1']";
var may25Date = "//*[@id='ui-datepicker-div']/table/tbody/tr[4]/td[6]/a";
var returningField = "//*[@id='date2']";
var may27Date = "//*[@id='ui-datepicker-div']/table/tbody/tr[5]/td[1]/a";
var previousMonthArrow = "//*[@id='ui-datepicker-div']/div/a[1]/span";
var travelersDropdown = "//*[@id='travelers']";
var travelersDropdownOption2 = "//*[@id='travelers']/option[3]";
var searchButton = "//*[@id='search-button']";
var showMeTheDealButton = "//*[@id='travel-tabs']/div[4]/p[5]/a";
var FlightSecondTab = "//*[@id='ct-header']/ul/li[2]/div/a/span[1]/img";
var FlightThirdTab = "//*[@id='ct-header']/ul/li[3]/div/a/span[1]/img";
var FlightFourthTab = "//*[@id='ct-header']/ul/li[4]/div/a/span[1]/img";
var FlightFifthTab = "//*[@id='ct-header']/ul/li[5]/div/a/span[1]/img";
var FlightSixthTab = "//*[@id='ct-header']/ul/li[6]/div/a/span[1]/img";
var FlightSeventhTab = "//*[@id='ct-header']/ul/li[7]/div/a/span[1]/img";

module.exports = {

    '@tags' : ['popunder', 'testsearch'],
    'FlightsTest' : function (client) {

//Go to the page and verify it's on the right one.

client.url(testPageURL)
        .useXpath()
        .click(flightsTab)
        .assert.containsText(testHeader, "Flights Test Form")

//Fill out fields, dropdowns and hit the Search button.

  client.clearValue(fromField)
        .setValue(fromField, "ABIA")
        .clearValue(toField)
        .setValue(toField, "LAX")
        .click(departingField)
        .click(previousMonthArrow)
        .click(may25Date)
        .pause(1000)
        .click(returningField)
        .click(previousMonthArrow)
        .click(may27Date)
        .pause(1000)
        .click(travelersDropdown)
        .click(travelersDropdownOption2)
        .pause(5000)
        .click(searchButton)

// Get window handles.

        .window_handles(function(result) {
            var originalWindow = result.value[0];
            var popUnderWindow = result.value[1];
  
// Switch to pop-under window and take SS of Welcome screen. 

  client.switchWindow(popUnderWindow)
        .waitForElementVisible(showMeTheDealButton, 6000)
        .saveScreenshot('FlightScreenshots/FlightWelcomeSS.png')

// Click Show Me The Deal button and take SS of first tab.

        .click(showMeTheDealButton)
        .pause(6000)
   Utils.checkForPopUp('FlightScreenshots/FlightFirstTabSS.png', client);

// Click second tab and take SS.

  client.click(FlightSecondTab)
        .pause(4000)
   Utils.checkForPopUp('FlightScreenshots/FlightSecondTabSS.png', client);

// Click third tab, wait, and take SS.

  client.click(FlightThirdTab)
        .pause(6000)
   Utils.checkForPopUp('FlightScreenshots/FlightThirdTabSS.png', client);

// Click fourth tab, wait, and take SS.

  client.click(FlightFourthTab)
        .pause(6000)
   Utils.checkForPopUp('FlightScreenshots/FlightFourthTabSS.png', client);

// Click fifth tab, wait, and take SS.

  client.click(FlightFifthTab)
        .pause(6000)
   Utils.checkForPopUp('FlightScreenshots/FlightFifthTabSS.png', client);

// Click sixth tab, wait, and take SS.

  client.click(FlightSixthTab)
        .pause(6000)
   Utils.checkForPopUp('FlightScreenshots/FlightSixthTabSS.png', client);

// Click seventh tab, wait, and take SS.

  client.click(FlightSeventhTab)
        .pause(6000)
   Utils.checkForPopUp('FlightScreenshots/FlightSeventhTabSS.png', client);

// Send current URl to console and end the client. 

  client.url(function(result) {
            console.log(result);
  });
})

    client.end();

  }
};