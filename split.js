var newWindowId = 0;
var tabPosition = 0;
var tabCount = 0;
var prevWindow = null;

function getWindow(tab) {
    tabPosition = tab.index;
    chrome.windows.getCurrent({populate: true}, resize);
}



// Resize current tab to be new left half tab and create new right window
function resize(win) {
    prevWindow = win;
    tabCount = win.tabs.length;
    var screenWidth = window.screen.availWidth;
    var screenHeight = window.screen.availHeight;
    
    var leftWindow = {
        left: 0,
        top: 0,
        width: screenWidth / 2,
        height: screenHeight
    };
    
    var rightWindow = {
        left: screenWidth / 2,
        top: 0,
        width: screenWidth / 2,
        height: screenHeight
    };
    

    
    chrome.windows.update(win.id, leftWindow);
    chrome.windows.create(rightWindow, getTabs);

}


// Get all tabs from old (left) window
function getTabs(newWindow) {
    newWindowId = newWindow.id;
    var tab = prevWindow.tabs;
    var tabs = tab.slice(tabPosition, tabCount-1);
    for (var t = 0; t < length(tabs); t++) {
        
        chrome.tabs.move(tabs[t], {"windowId": newWindowId, "index": -1});
    }

    chrome.tabs.remove(newWindow.tabs[0].id);
}

chrome.browserAction.onClicked.addListener(getWindow);