import pizzaImg from "./images/pizza.jpg";
// import pizzaBG from "./images/pizzaBG" ??;

export default function home() {
  console.log("🔥 home() is CALLED RIGHT NOW");

  const div = document.createElement("div");
  div.classList.add("home-container");

  const textArea = document.createElement("div");
  textArea.classList.add("home-text-area");

  const h1 = document.createElement("h1");
  h1.classList.add("home-title");
  h1.textContent = "Portofino Pizzeria";

  const p = document.createElement("p");
  p.classList.add("home-subtitle");
  p.textContent =
    "Authentic Italian Flavor, Straight From Our Oven to Your Table!";

  const btnArea = document.createElement("div");
  btnArea.classList.add("home-btn-area");

  const btnOrder = document.createElement("button");
  btnOrder.classList.add("order-btn");
  btnOrder.textContent = "ORDER NOW";
  btnArea.append(btnOrder);

  textArea.append(h1, p, btnArea);

  const imgArea = document.createElement("div");
  imgArea.classList.add("home-img-area");
  const img = document.createElement("img");
  img.src = pizzaImg;
  img.alt = "Pizza";
  img.classList.add("home-img");
  imgArea.append(img);

  div.append(textArea, imgArea);

  // Возвращаем и div, и кнопку
  return { div, btnOrder };
}
