const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetsData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
  console.table(data);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birthDate = document.createElement("p");
    let birthplace = document.createElement("p");

    let deathDate = document.createElement("p");
    let numberPosition = document.createElement("p");
    let yearsServed = document.createElement("p");
    let numberofChildren = document.createElement("p");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date Of Birth: ${prophet.birthdate}`;
    birthDate.textContent = `Date Of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Birth Place: ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "100%");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthplace);

    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression
getProphetsData();
