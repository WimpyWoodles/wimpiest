var Utils = require('../Utils');
var testPageURL = "https://www.clicktripz.com/test.php";
var testHeader = "html/body/div[1]/div/h1";
var cityField = "//*[@id='city']";
var checkInField = "//*[@id='date1']";
var may25Date = "//*[@id='ui-datepicker-div']/table/tbody/tr[4]/td[6]/a";
var checkOutField = "//*[@id='date2']";
var may27Date = "//*[@id='ui-datepicker-div']/table/tbody/tr[5]/td[1]/a";
var guestsDropdown = "//*[@id='guests']";
var guestsDropdownOption2 = "//*[@id='guests']/option[2]";
var searchButton = "//*[@id='search-button']";
var showMeTheDealButton = "//*[@id='travel-tabs']/div[4]/p[5]/a";
var hotelCitywideSecondTab = "//*[@id='ct-header']/ul/li[2]/div/a/span[1]/img";
var hotelCitywideThirdTab = "//*[@id='ct-header']/ul/li[3]/div/a/span[1]/img";
var hotelCitywideFourthTab = "//*[@id='ct-header']/ul/li[4]/div/a/span[1]/img";
var hotelCitywideFifthTab = "//*[@id='ct-header']/ul/li[5]/div/a/span[1]/img";
var hotelCitywideSixthTab = "//*[@id='ct-header']/ul/li[6]/div/a/span[1]/img";
var hotelCitywideSeventhTab = "//*[@id='ct-header']/ul/li[7]/div/a/span[1]/img";

module.exports = {

  '@tags' : ['popunder', 'testsearch'],
  'HotelCitywideTest' : function (client) {

//Go to the page and verify it's on the right one.

  client.url(testPageURL)
        .useXpath()
        .assert.containsText(testHeader, "Hotel Citywide Test Form")

//Fill out fields, dropdowns and hit the Search button.

  client.clearValue(cityField)
        .setValue(cityField, "Austin, TX")
        .click(checkInField)
        .click(may25Date)
        .pause(1000)
        .click(checkOutField)
        .click(may27Date)
        .pause(1000)
        .click(guestsDropdown)
        .click(guestsDropdownOption2)
        .pause(5000)
        .click(searchButton)

// Get window handles

        .window_handles(function(result) {
          var originalWindow = result.value[0];
          var popUnderWindow = result.value[1];
          
// Switch to pop-under window and take SS of Welcome screen. 

  client.switchWindow(popUnderWindow)
        .waitForElementVisible(showMeTheDealButton, 6000)
        .saveScreenshot('HotelCitywideScreenshots/HotelCitywideWelcomeSS.png')

// Click Show Me The Deal button and take SS of first tab.

        .click(showMeTheDealButton)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideFirstTabSS.png', client);

// Click second tab, wait, and take SS.

  client.click(hotelCitywideSecondTab)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideSecondTabSS.png', client);

// Click third tab, wait,and take SS. 

  client.click(hotelCitywideThirdTab)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideThirdTabSS.png', client);

// Click fourth tab, wait,and take SS. 

  client.click(hotelCitywideFourthTab)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideFourthTabSS.png', client);

// Click fifth tab, wait,and take SS. 

  client.click(hotelCitywideFifthTab)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideFifthTabSS.png', client);

// Click fifth tab, wait,and take SS. 

  client.click(hotelCitywideSixthTab)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideSixthTabSS.png', client);

// Click fifth tab, wait,and take SS. 

  client.click(hotelCitywideSeventhTab)
        .pause(6000)
   Utils.checkForPopUp('HotelCitywideScreenshots/HotelCitywideSeventhTabSS.png', client);

// Send current URl to console and end the client. 

  client.url(function(result) {
        console.log(result);

      });

        })

  client.end();

  }
};