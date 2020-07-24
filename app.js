// Variables
const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");

let count = 1;

// Functions
function addEntryToDom(e) {
  e.preventDefault();
  const entryDiv = document.createElement("div");
  entryDiv.classList = "single-entry";
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);
  entryTextbox.value = "";

  const displayEntryButton = document.createElement("button");
  displayEntryButton.classList = "display-entry-button";
  displayEntryButton.innerText = count;
  entriesNav.appendChild(displayEntryButton);

  displayEntryButton.addEventListener("click", function () {
    const allEntries = document.querySelectorAll(".single-entry");
    for (let i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = "none";
    }
    entryDiv.style.display = "block";
  });

  count++;
}

// Event listeners
entryForm.addEventListener("submit", addEntryToDom);
