export function loadAbout() {

    const content = document.querySelector("#content");
    
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");

    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "About Us";
    aboutDiv.appendChild(aboutTitle);

    const aboutContent = document.createElement("p");
    aboutContent.classList.add("about-content");
    aboutContent.textContent = "Our Story: Located in the heart of Tunis, Dar El Bahja is a celebration of Tunisia’s rich culinary heritage. Our recipes are inspired by generations of family cooking — blending Berber, Arab, Andalusian, and Mediterranean influences. We roast our meats over charcoal, bake bread in traditional tabouna ovens, and grind our spices fresh daily.";
    aboutDiv.appendChild(aboutContent);

    content.appendChild(aboutDiv)
    
}