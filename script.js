const cardContainer = document.getElementById("gallery2");
const sortOrderSelect = document.getElementById("sortOrder");

// Function to sort cards and update the cardContainer
function sortCards() {
  const cards = Array.from(cardContainer.getElementsByClassName("player-card"));
  const sortOrder = sortOrderSelect.value;

  cards.sort((a, b) => {
    const idA = parseInt(a.getAttribute("data-id"));
    const idB = parseInt(b.getAttribute("data-id"));

    if (sortOrder === "highToLow") {
      return idB - idA;
    } else {
      return idA - idB;
    }
  });

  cardContainer.innerHTML = ""; // Clear current cards

  cards.forEach((card) => {
    cardContainer.appendChild(card);
  });
}

// Initial sorting
sortCards();

// Listen for change in sort order
sortOrderSelect.addEventListener("change", sortCards);

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

