// Select the button
const btn = document.querySelector(".dark-toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var styleSheet = document.querySelector('.theme-link');

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  styleSheet.href = "/assets/css/dark-theme.css";
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  styleSheet.href = "/assets/css/light-theme.css";
}

let theme;

// Listen for a click on the button 
btn.addEventListener("click", function() {
  const latestTheme = localStorage.getItem("theme");
  if (latestTheme == 'dark') {
    styleSheet.href = '/assets/css/light-theme.css';
    theme = 'light';
  } else {
    styleSheet.href = '/assets/css/dark-theme.css';
    theme = 'dark';
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);
});