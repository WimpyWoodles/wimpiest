/**
 * 
 * @param {String} SSpath 
 * @param {Nightwatch Client} client 
 */
function checkForPopUp (SSpath, client) {

  client.window_handles(function(result) {
    var originalWindow = result.value[0];
    var popUnderWindow = result.value[1];
    var otherWindow = result.value[2];
            

    if (result.value[2]){

      client.switchWindow(otherWindow)
            .saveScreenshot(SSpath)
            .closeWindow(otherWindow)
            .switchWindow(popUnderWindow)

    } else {

      client.saveScreenshot(SSpath)

    }
  });
}
  
export { 
  checkForPopUp
}