chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  const currentTab = tabs[0];
  const url = new URL(currentTab.url);
  const tinkerUrl = `${url.origin}/tinker`;
  document.getElementById('tinkerFrame').src = tinkerUrl;
});
