import margaritaImg from "./images/margarita.jpg";
import assortiImg from "./images/assorti.jpg";
import peperoniImg from "./images/peperoni.jpg";

export default function RenderMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuHeader = document.createElement("h2");
  menuHeader.classList.add("menu-title");
  menuHeader.textContent = "OUR MENU";

  //              MARGARITA             //
  const pizzaCardOne = document.createElement("div");
  pizzaCardOne.classList.add("pizza-card");

  const pizzaImgOne = document.createElement("img");
  pizzaImgOne.alt = "Margarita";
  pizzaImgOne.src = margaritaImg;

  const pizzaOneTextArea = document.createElement("div");
  pizzaOneTextArea.classList.add("pizza-card-text-area");

  const pizzaOneTitle = document.createElement("p");
  pizzaOneTitle.textContent = "Margarita";

  const pizzaOnePrice = document.createElement("p");
  pizzaOnePrice.classList.add("pizza-price");
  pizzaOnePrice.textContent = "2.99$";

  // pizza one text area append
  pizzaOneTextArea.append(pizzaOneTitle, pizzaOnePrice);

  // pizza one append
  pizzaCardOne.append(pizzaImgOne, pizzaOneTextArea);

  //                 ASSORTI             //
  const pizzaCardTwo = document.createElement("div");
  pizzaCardTwo.classList.add("pizza-card");

  const pizzaImgTwo = document.createElement("img");
  pizzaImgTwo.src = assortiImg;
  pizzaImgTwo.alt = "Assorti";

  const pizzaTwoTextArea = document.createElement("div");
  pizzaTwoTextArea.classList.add("pizza-card-text-area");

  const pizzaTwoTitle = document.createElement("p");
  pizzaTwoTitle.textContent = "Assorti";

  const pizzaTwoPrice = document.createElement("p");
  pizzaTwoPrice.classList.add("pizza-price");
  pizzaTwoPrice.textContent = "2.69$";

  // pizza two text area append
  pizzaTwoTextArea.append(pizzaTwoTitle, pizzaTwoPrice);

  // pizza two append
  pizzaCardTwo.append(pizzaImgTwo, pizzaTwoTextArea);

  //              PEPERONI              //
  const pizzaCardThree = document.createElement("div");
  pizzaCardThree.classList.add("pizza-card");

  const pizzaImgThree = document.createElement("img");
  pizzaImgThree.src = peperoniImg;
  pizzaImgThree.alt = "Peperoni";

  const pizzaThreeTextArea = document.createElement("div");
  pizzaThreeTextArea.classList.add("pizza-card-text-area");

  const pizzaThreeTitle = document.createElement("p");
  pizzaThreeTitle.textContent = "Peperoni";

  const pizzaThreePrice = document.createElement("p");
  pizzaThreePrice.classList.add("pizza-price");

  pizzaThreePrice.textContent = "2.49$";

  // pizza three text area append
  pizzaThreeTextArea.append(pizzaThreeTitle, pizzaThreePrice);

  // pizza three append
  pizzaCardThree.append(pizzaImgThree, pizzaThreeTextArea);

  // Cards wrapper
  const cardsWrapper = document.createElement("div");
  cardsWrapper.classList.add("menu-cards-wrapper");

  // Final append
  cardsWrapper.append(pizzaCardOne, pizzaCardTwo, pizzaCardThree);
  menuContainer.append(menuHeader, cardsWrapper);

  return menuContainer;
}
