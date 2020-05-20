// validation
var form = document.querySelector(".form");
var userName = form.querySelector("[name=user-name]");
var userSurname = form.querySelector("[name=user-surname]");
var userPhone = form.querySelector("[name=phone]");
var userEmail = form.querySelector("[name=email]");

var modalSuccess = document.querySelector(".form-modal__success");
var modalSuccessBtn = modalSuccess.querySelector("#button-success");
var modalError = document.querySelector(".form-modal__error");
var modalErrorBtn = modalError.querySelector("#button-error");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if ((!userName.value || !userSurname.value || !userPhone.value || !userEmail.value)) {
    modalError.classList.add("modal--opened");
  } else {
    modalSuccess.classList.add("modal--opened");
  }
});

modalSuccessBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove("modal--opened");
});

modalErrorBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalError.classList.remove("modal--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalError.classList.contains("modal--opened")) {
      modalError.classList.remove("modal--opened");
    } else
    if (modalSuccess.classList.contains("modal--opened")) {
      modalSuccess.classList.remove("modal--opened");
    }
  }
});
