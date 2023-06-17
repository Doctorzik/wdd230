const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function GetDirectories() {
  const response = await fetch("jsonfiles/data.json");
  const data = await response.json();
  displayDirectories(data.directories);
}
GetDirectories();
const displayDirectories = (directories) => {
  const cards = document.querySelector("article.grid");

  directories.forEach((info) => {
    let card = document.createElement("section");
    let portrait = document.createElement("img");
    let companyName = document.createElement("h3");
    let companyEmail = document.createElement("p");
    let companyAddress = document.createElement("address");
    let companyRating = document.createElement("p");
    let companyMlevel = document.createElement("p");
    let companyPhone = document.createElement("p");
    let companyYearEstablished = document.createElement("p");
    let companyWebsite = document.createElement("a");

    portrait.setAttribute("src", info.image);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "400");
    portrait.setAttribute("height", "400");
    portrait.setAttribute("alt", info.name);
    portrait.classList.add("img");
    companyName.textContent = info.name;
    companyEmail.textContent = `Email: ${info.email}`;
    companyAddress.textContent = `Address: ${info.address}`;
    companyRating.textContent = `Company Rating ${info.rating}`;
    companyMlevel.textContent = `Membership Level ${info.mlevel}`;
    companyPhone.textContent = info.phone;
    companyWebsite.innerHTML = `<a href="info.website" target="_blank">${info.website}</a>`;
    companyYearEstablished.textContent = info.established;
    card.append(
      companyName,
      companyEmail,
      companyAddress,
      companyRating,
      companyMlevel,
      companyPhone,
      companyWebsite,
      companyYearEstablished,
      portrait
    );

    cards.appendChild(card);
  });
};

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
