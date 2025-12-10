import "./style.css";
import RenderInitialHome from "./initialLoad.js";
import RenderContact from "./contact.js";
import RenderMenu from "./menu.js";
import home from "./home.js";

// Контейнер и кнопки в хедере
const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const contactBtn = document.getElementById("contactBtn");
const menuBtn = document.getElementById("menuBtn");
const buttons = [homeBtn, contactBtn, menuBtn];

// switchTab универсальная функция
function switchTab(tabFunc, activeBtn) {
  content.textContent = "";
  content.classList.remove("contact-bg");
  content.classList.remove("home-bg");

  // Если это контактная вкладка — добавляем фон
  if (tabFunc === RenderContact) {
    content.classList.add("contact-bg");
  }

  if (tabFunc === home) {
    content.classList.add("home-bg");
  }

  const tabContent = tabFunc();

  // Если вернулась кнопка внутри tabContent, отдельно на неё можно повесить обработчик
  if (tabContent.div && tabContent.btnOrder) {
    content.append(tabContent.div);
    // Кнопка "ORDER NOW" открывает контакт
    tabContent.btnOrder.addEventListener("click", () =>
      switchTab(RenderContact, tabContent.btnOrder)
    );
  } else {
    content.append(tabContent);
  }

  buttons.forEach((btn) => btn.classList.remove("active"));
  if (activeBtn.classList) activeBtn.classList.add("active");
}

// Начальный рендер Home
switchTab(home, homeBtn);

// Вешаем клики на хедерные кнопки
homeBtn.addEventListener("click", () => switchTab(home, homeBtn));
contactBtn.addEventListener("click", () =>
  switchTab(RenderContact, contactBtn)
);
menuBtn.addEventListener("click", () => switchTab(RenderMenu, menuBtn));
