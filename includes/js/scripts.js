const loginBtn = document.getElementById("loginBtn");
const password = document.getElementById("password");
const username = document.getElementById("username");

const checkInput = () => {
  if (password.value.trim() !== "" && username.value.trim() !== "") {
    setBtnActive();
  } else {
    setBtnNormal();
  }
};

const setBtnActive = () => {
  loginBtn.classList.remove("btn-normal");
  loginBtn.classList.add("btn-active");
};
const setBtnNormal = () => {
  loginBtn.classList.remove("btn-active");
  loginBtn.classList.add("btn-normal");
};

username.addEventListener("input", checkInput);
password.addEventListener("input", checkInput);
