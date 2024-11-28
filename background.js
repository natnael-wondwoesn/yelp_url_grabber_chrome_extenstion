chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Data received:", message);
  });
  