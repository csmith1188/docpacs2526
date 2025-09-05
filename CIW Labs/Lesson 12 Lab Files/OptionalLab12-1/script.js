// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  const items = menu.querySelectorAll('a');

  let currentIndex = -1;

  // When the button is focused and user presses down arrow, open and focus first item
  menuButton.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      menuButton.click(); // open the menu
      currentIndex = 0;
      items[currentIndex].focus();
    }
  });

  // Keyboard navigation inside the menu
  menu.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      items[currentIndex].focus();
    } else if (e.key === "Escape") {
      menuButton.focus();
    }
  });
});
