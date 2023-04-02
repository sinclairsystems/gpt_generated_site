// JavaScript code for the Virtual Reality Headsets website

// Function to change the background color of the header on scroll
window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = "#222";
    } else {
        header.style.backgroundColor = "#333";
    }
};

// Function to display a message on button click
function showMessage() {
    alert("Thank you for visiting our website!");
}