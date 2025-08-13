// Starters
const starters = [
    {
        title: "Brik à l’Œuf",
        description: "Crispy pastry filled with egg, tuna, and capers.",
        price: "12 DT",
    },
    {
        title: "Salade Méchouia",
        description: "Grilled peppers and tomatoes with garlic and olive oil.",
        price: "10 DT",
    },
    {
        title: "Lablabi",
        description: "Chickpea soup with harissa, olive oil, and bread.",
        price: "8 DT",
    },
];

// Mains
const mains = [
    {
        title: "Couscous Royal",
        description:
            "Steamed semolina with lamb, chicken, merguez, and vegetables.",
        price: "28 DT",
    },
    {
        title: "Ojja Merguez",
        description: "Spicy tomato and pepper stew with eggs and merguez sausage.",
        price: "20 DT",
    },
    {
        title: "Sea Bass with Charmoula",
        description: "Marinated and grilled whole fish with herbs.",
        price: "30 DT",
    },
];

// Desserts
const desserts = [
    {
        title: "Makroud",
        description: "Date-filled semolina pastries with honey.",
        price: "8 DT",
    },
    {
        title: "Bambalouni",
        description: "Tunisian-style doughnuts dusted with sugar.",
        price: "6 DT",
    },
    {
        title: "Assida Zgougou (seasonal)",
        description: "Pine nut cream with almonds and pistachios.",
        price: "10 DT",
    },
];

//Beverages
const beverages = [
    {
        title: "Mint Tea with Pine Nuts",
        description: "Traditional Tunisian mint tea served with pine nuts.",
        price: "5 DT",
    },
    {
        title: "Fresh Squeezed Orange Juice",
        description: "Sweet and tangy oranges pressed to order.",
        price: "6 DT",
    },
    {
        title: "Boukha Fig Spirit",
        description:
            "Traditional Tunisian fig-based spirit. Ask server for details.",
        price: "Market price",
    },
];

export function loadMenu() {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";

    //starters sec
    const startersDiv = document.createElement("div");
    startersDiv.classList.add("starters");

    const startersTitle = document.createElement("h2");
    startersTitle.classList.add("starters-title");
    startersTitle.textContent = "Our Starters";
    startersDiv.appendChild(startersTitle);

    const startersItems = document.createElement("div");
    startersItems.classList.add("section-items-container");
    startersDiv.appendChild(startersItems);

    for (const item of starters) {

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const itemName = document.createElement("p");
        itemName.classList.add("menu-item-name");
        itemName.textContent = item.title;

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = item.price 

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);
        startersItems.appendChild(itemContainer);
    }

     
    //mains sec
    const mainsDiv = document.createElement("div");
    mainsDiv.classList.add("mains");

    const mainsTitle = document.createElement("h2");
    mainsTitle.classList.add("mains-title");
    mainsTitle.textContent = "Our Mains";
    mainsDiv.appendChild(mainsTitle);

    const mainsItems = document.createElement("div");
    mainsItems.classList.add("section-items-container");
    mainsDiv.appendChild(mainsItems);

    for (const item of mains) {

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const itemName = document.createElement("p");
        itemName.classList.add("menu-item-name");
        itemName.textContent = item.title;

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = item.price 

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);
        mainsItems.appendChild(itemContainer);
    }

    //desserts sec
    const dessertsDiv = document.createElement("div");
    dessertsDiv.classList.add("desserts");

    const dessertsTitle = document.createElement("h2");
    dessertsTitle.classList.add("desserts-title");
    dessertsTitle.textContent = "Our Desserts";
    dessertsDiv.appendChild(dessertsTitle);

    const dessertsItems = document.createElement("div");
    dessertsItems.classList.add("section-items-container");
    dessertsDiv.appendChild(dessertsItems);

    for (const item of desserts) {

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const itemName = document.createElement("p");
        itemName.classList.add("menu-item-name");
        itemName.textContent = item.title;

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = item.price 

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);
        dessertsItems.appendChild(itemContainer);
    }

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(startersDiv);
    menuContainer.appendChild(mainsDiv);
    menuContainer.appendChild(dessertsDiv);
    content.appendChild(menuContainer);
}
