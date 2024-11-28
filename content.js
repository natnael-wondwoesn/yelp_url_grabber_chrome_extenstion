(() => {
    const selector = "#main-content > ul > li"; // Select all list items
  
    function extractData() {
      const elements = document.querySelectorAll(selector);
      const data = [];
  
      elements.forEach((element) => {
        const nameElement = element.querySelector("h3 a");
        const link = nameElement?.href || "";
  
        if (link.includes("ad_business_id")) 
            return;

  
        const name = nameElement?.innerText.trim() || "No name found";
        data.push({ name, link });
      });
  
      // If no valid items found
      if (data.length === 0) {
        data.push({ name: "No valid items found", link: "" });
      }
  
      return data;
    }
  
    // Send data back to the popup
    chrome.runtime.sendMessage({ data: extractData() });
  })();
  