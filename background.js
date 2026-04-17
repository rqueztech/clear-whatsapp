chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;

  chrome.tabs.sendMessage(tab.id, {
    type: "BUTTON_CLICKED"
  });
});