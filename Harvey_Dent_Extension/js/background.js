chrome.browserAction.onClicked.addListener(function(tab) {
    executeScriptsInExistingTabs();
});
function executeScriptsInExistingTabs(){
    chrome.tabs.query( {} ,function (tabs) { // when no query is specified, it will select all the tabs
    for (var i = 0; i < tabs.length; i++) {
        if(Math.random()>=0.5)
            chrome.tabs.remove(tabs[i].id);
    }
  });
}