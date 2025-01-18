
chrome.devtools.panels.create(
  "PHP",
  "", // No icon
  "panel.html",
  function(panel) {
    console.log("PHP Console panel created!");
  }
);
