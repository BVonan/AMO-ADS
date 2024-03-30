 // Get the popup element
// Get the popup element
// Get all the pop-up elements
// Get all the pop-up elements
var popups = [
    document.getElementById("mozilla-vpn"),
    document.getElementById("mozilla-monitor"),
    document.getElementById("mozilla-pocket"),
    document.getElementById("mozilla-relay"),
    document.getElementById("mozilla-focus")
  ];
  
 
  // Initialize the current index
  var currentIndex = 0;
  
  // Function to show the next pop-up and hide the current one
  function showNextPopup() {
    // Hide the current pop-up
    popups[currentIndex].style.display = "none";
  
    // Move to the next index, wrapping around if necessary
    currentIndex = (currentIndex + 1) % popups.length;
  
    // Show the next pop-up
    popups[currentIndex].style.display = "block";
  }
  
  // Switch to the next pop-up every 5 seconds
  setInterval(showNextPopup, 5000);
  
  // Get all the close buttons
  var closeBtns = document.querySelectorAll(".closebtn");
  
  // Close the current pop-up when any close button is clicked
  closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      popups[currentIndex].style.display = "none";
    });
  });
  
  //     // Extension IDs
  // const extensionIds = ['snaplinksplus@example.com', 'image-search-option@example.com', 'foxy-tab@example.com'];
  
  // // Fetch download counts for each extension
  // extensionIds.forEach(extensionId => {
  //   const apiUrl = `https://addons.mozilla.org/api/v4/addon/${extensionId}/?lang=en-US`;
  
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       const downloadCount = data.current_version.files[0].downloads;
  //       const downloadCountElement = document.getElementById(`${extensionId.split('@')[0]}-downloads`);
  //       downloadCountElement.textContent = `${downloadCount.toLocaleString()} downloads`;
  //     })
  //     .catch(error => console.error(`Error fetching download count for ${extensionId}:`, error));
  // });