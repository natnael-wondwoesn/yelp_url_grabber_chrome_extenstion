document.getElementById("extract").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"]
      });
    });
  
    chrome.runtime.onMessage.addListener((message) => {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
  
      if (message.data && message.data.length > 0) {
        message.data.forEach((item, index) => {
          const itemHtml = `
            <p><strong>${index + 1}. Name:</strong> ${item.name}</p>
            <p><strong>Link:</strong> <a href="${item.link}" target="_blank">${item.link}</a></p>
            <hr>
          `;
          resultDiv.innerHTML += itemHtml;
        });
      } else {
        resultDiv.innerHTML = "<p>No data found</p>";
      }
    });
  });
  