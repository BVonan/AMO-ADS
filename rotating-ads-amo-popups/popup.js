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

// Function to show the previous pop-up and hide the current one
function showPreviousPopup() {
  // Hide the current pop-up
  popups[currentIndex].style.display = "none";

  // Move to the previous index, wrapping around if necessary
  currentIndex = (currentIndex - 1 + popups.length) % popups.length;

  // Show the previous pop-up
  popups[currentIndex].style.display = "block";
}

// Interval ID for the timer
var timerInterval;

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(showNextPopup, 5000);
}

// Start the timer initially
startTimer();

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Event listeners for mouse enter and mouse leave events on pop-up elements
popups.forEach(function(popup) {
  popup.addEventListener("mouseenter", function() {
      stopTimer();
  });

  popup.addEventListener("mouseleave", function() {
      startTimer();
  });
});

// Get all the close buttons
var closeBtns = document.querySelectorAll(".closebtn");

// Close the current pop-up when any close button is clicked
closeBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
      popups[currentIndex].style.display = "none";
  });
});

// Get the button for showing the previous pop-up
var prevButton1 = document.getElementById("prevButton1");
var prevButton2 = document.getElementById("prevButton2");
var prevButton3 = document.getElementById("prevButton3");
var prevButton4 = document.getElementById("prevButton4");
var prevButton5 = document.getElementById("prevButton5");


// event listeners for previous button
prevButton1.addEventListener("click", function() {
  showPreviousPopup();
});
prevButton2.addEventListener("click", function() {
  showPreviousPopup();
});
prevButton3.addEventListener("click", function() {
  showPreviousPopup();
});
prevButton4.addEventListener("click", function() {
  showPreviousPopup();
});
prevButton5.addEventListener("click", function() {
  showPreviousPopup();
});