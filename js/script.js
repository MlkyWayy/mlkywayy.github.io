//Chatbox
window.$crisp = [];
window.CRISP_WEBSITE_ID = "314164da-eb2e-4792-8af1-f73fe447ac0a";
(function () {
  d = document;
  s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();

//Parallax
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

//Contact Form
const scriptURL = "https://script.google.com/macros/s/AKfycbxCE7rRqiKL9jIfKbYMjCE5ScTKENBzLOe1WNphmgoFrhG0DIaTo9JrdJCFwyjJn5fSaA/exec";
const form = document.forms["portfolio-contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Menghilangkan button kirim, Menampilkan Button loading
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      // Menghilangkan button loading, Menampilkan Button kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //menampilkan alert
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
