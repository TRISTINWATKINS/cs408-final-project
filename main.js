window.onload = loaded;

console.log("Grocery List App Loaded");

// Placeholder listeners (will connect to AWS later)

document.getElementById("add-item-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted! (AWS coming soon)");
});

document.getElementById("load-items").addEventListener("click", () => {
  alert("Would load items from AWS...");
});
