// Initialize with a max volume multiplier of 5
initialize(3)

// Initializes the communication to the content script
function initialize(maxVolumeMultiplier) {
  let currentVolumeLevel = 1

  // Set initial badge text
  updateBadge(currentVolumeLevel)

  chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const activeTab = tabs[0];
      currentVolumeLevel = currentVolumeLevel === maxVolumeMultiplier ? 1 : currentVolumeLevel + 1

      // Update badge with the new value
      updateBadge(currentVolumeLevel)

      chrome.tabs.sendMessage(activeTab.id, {
        message: 'set_volume_level',
        value: currentVolumeLevel
      });
    });
  });
}

// Sets the multiplier badge text
function updateBadge(multiplierValue) {
  chrome.browserAction.setBadgeText({
    text: `${multiplierValue}x`
  });
}