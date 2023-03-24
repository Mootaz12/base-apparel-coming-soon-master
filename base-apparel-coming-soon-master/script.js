"uses strict";
const form = document.querySelector("form");
const btn = document.querySelector("button");
const email = document.getElementById("email");
let errEl;
btn.addEventListener("click", (e) => {
  if (!email.checkValidity()) {
    e.preventDefault();
    email.classList.add("input-err");
    if (!errEl) {
      errEl = document.createElement("p");
      let errMsg = "Pleas provide a valid email";
      errEl.classList.add("err-msg");
      errEl.textContent = errMsg;
      form.appendChild(errEl);
    }
  } else {
    form.removeChild(errEl);
  }
});
