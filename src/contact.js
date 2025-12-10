export default function RenderContact() {
  console.log("RenderContact is working");

  // создание контейнера
  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-container");

  // Создание формы
  const form = document.createElement("form");
  form.classList.add("contact-form");

  // Label и input для имени
  const labelNameContainer = document.createElement("div");
  const labelName = document.createElement("label");
  labelName.htmlFor = "name";
  labelName.textContent = "Имя";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";
  inputName.placeholder = "Введите имя..";
  inputName.required = true;
  labelNameContainer.append(labelName, inputName);

  // Label и input для телефона
  const labelTelContainer = document.createElement("div");
  const labelTel = document.createElement("label");
  labelTel.htmlFor = "tel";
  labelTel.textContent = "Телефон";
  const inputTel = document.createElement("input");
  inputTel.type = "tel";
  inputTel.id = "tel";
  inputTel.placeholder = "Введите телефон..";
  inputTel.required = true;
  inputTel.pattern = "^[0-9()+\\- ]+$";

  labelTelContainer.append(labelTel, inputTel);

  // Label и input для почты
  const labelEmailContainer = document.createElement("div");
  const labelEmail = document.createElement("label");
  labelEmail.htmlFor = "email";
  labelEmail.textContent = "Почта";
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.id = "email";
  inputEmail.placeholder = "Введите почту..";
  inputEmail.required = true;
  labelEmailContainer.append(labelEmail, inputEmail);

  // Создание кнопки
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Отправить";
  submitBtn.classList.add("submit-btn");

  form.append(
    labelNameContainer,
    labelTelContainer,
    labelEmailContainer,
    submitBtn
  );
  wrapper.append(form);

  // Возвращаем элемент, не мутируя DOM напрямую
  return wrapper;
}
