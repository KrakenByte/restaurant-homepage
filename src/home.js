import interiorImgPath from "./au-coeur-de-la-medina.jpg"

export function loadHome() {
    const content = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const title = document.createElement("h1");
    title.classList.add("restaurant-title");
    title.textContent = "Dar El Bahja";

    const description = document.createElement("p");
    description.classList.add("restaurant-tagline");
    description.textContent = "Authentic Tunisian flavors, straight from the medina."

    const interiorImg = document.createElement("img");
    interiorImg.classList.add("restaurant-interior")
    interiorImg.src = interiorImgPath;
    interiorImg.alt = "interior";

    homeContainer.appendChild(title);
    homeContainer.appendChild(description);
    homeContainer.appendChild(interiorImg);

    content.appendChild(homeContainer);
};