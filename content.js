chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "BUTTON_CLICKED") {
    console.log("Button clicked in extension!");

    const event = new CustomEvent("my-extension-event", {
      detail: { message: "Hello from extension" }
    });

    window.dispatchEvent(event);
  }
});