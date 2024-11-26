// Functionality for the "Hire Me" button and contact form popup
const hireMeButton = document.getElementById('hireMeButton');
const contactForm = document.getElementById('contactForm');
const overlay = document.getElementById('overlay');
const successMessage = document.getElementById('successMessage');
const contactFormInner = document.getElementById('contactFormInner');

// Function to show the contact form
function showContactForm() {
    contactForm.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to hide the contact form
function hideContactForm() {
    contactForm.style.display = 'none';
    overlay.style.display = 'none';
}

// Event listener for "Hire Me" button
hireMeButton.addEventListener('click', showContactForm);

// Hide form and overlay when the overlay is clicked
overlay.addEventListener('click', hideContactForm);

// Handle form submission
contactFormInner.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Submit form using fetch
    fetch(contactFormInner.action, {
        method: 'POST',
        body: new FormData(contactFormInner),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            successMessage.style.display = 'block'; // Show success message
            setTimeout(() => {
                successMessage.style.display = 'none'; // Hide message after 3 seconds
            }, 3000);
            hideContactForm(); // Close form
            contactFormInner.reset(); // Clear form inputs
        } else {
            alert('Error sending message. Please try again.');
        }
    }).catch(() => {
        alert('There was an error. Please try again.');
    });
});

// HTML/CSS progress circular bar functionality
let htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlspeed = 30;

let progresshtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${
        htmlStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (htmlStartValue == htmlEndValue) {
        clearInterval(progresshtml);
    }
}, htmlspeed);

// JavaScript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsspeed = 30;

let progressjs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
        javascriptStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (javascriptStartValue == javascriptEndValue) {
        clearInterval(progressjs);
    }
}, jsspeed);

// PHP progress circular bar
let phpProgress = document.querySelector(".php"),
    phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
    phpEndValue = 80,
    phpspeed = 30;

let progressphp = setInterval(() => {
    phpStartValue++;
    phpValue.textContent = `${phpStartValue}%`;
    phpProgress.style.background = `conic-gradient(#20c997 ${
        phpStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (phpStartValue == phpEndValue) {
        clearInterval(progressphp);
    }
}, phpspeed);

// ReactJS progress circular bar
let reactProgress = document.querySelector(".reactjs"),
    reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
    reactEndValue = 30,
    rjsspeed = 30;

let progressreact = setInterval(() => {
    reactStartValue++;
    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${
        reactStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (reactStartValue == reactEndValue) {
        clearInterval(progressreact);
    }
}, rjsspeed);

// Filter functionality
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post").show("1000");
        } else {
            $(".post")
                .not("." + value)
                .hide("1000");
            $(".post")
                .filter("." + value)
                .show("1000");
        }
    });
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            document.getElementById("navbar-top").classList.add("fixed-top");
            // Add padding top to show content behind navbar
            navbar_height = document.querySelector(".navbar").offsetHeight;
            document.body.style.paddingTop = navbar_height + "px";
        } else {
            document.getElementById("navbar-top").classList.remove("fixed-top");
            // Remove padding top from body
            document.body.style.paddingTop = "0";
        }
    });
});

// Back-to-top button functionality
let mybutton = document.getElementById("btn-back-to-top");

// Show/hide button when user scrolls
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to top when button is clicked
mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
