chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://w3schools.com/";
  chrome.tabs.create({ url: newURL });
});