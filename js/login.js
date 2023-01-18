//  Sign up   //
const signApp = document.querySelector(".sign-app");
const loginApp = document.querySelector(".logIn");
const elForm = document.querySelector(".form");
const loginForm = document.querySelector(".login-form");
const signIn = document.querySelector(".sign-in");
const sgn = document.querySelector(".sgn");
const lgn = document.querySelector(".lgn");
const Exit = document.querySelector(".exit");
const Back = document.querySelector(".back");

sgn.addEventListener("click", (e) => {
  e.preventDefault();
  signApp.style.display = "block";
  loginApp.style.display = "none";
});
lgn.addEventListener("click", (e) => {
  e.preventDefault();
  signApp.style.display = "none";
  loginApp.style.display = "block";
});
Exit.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5500/index.html";
});
Back.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5500/index.html";
});

//    main   section  //
//    For Sign up
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
    phone: e.target.phone.value,

    name: "name",
    inn: 123123,
    company_name: "kompany",
    type: "partner",
    bank_account: "asdasd",
    bank_name: "bank",
    mfo: 12123123321123,
    company_address: "asdasdwqeq",
  };

  (async function () {
    try {
      const res = await fetch("https://backend.gazoil.uz/accounts/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        window.location.href = "http://127.0.0.1:5500/pages/Admin.html";
      } else {
        let error = document.querySelector(".error-message");
        error.style.display = "block";
        error.textContent = "Email yoki parol oldin ishlatilgan";

        setTimeout(() => {
          error.style.display = "none";
        }, 3000);
      }

      localStorage.setItem("token", "token");
    } catch (error) {
      console.log(error);
    }
  })();
});

//   This codes for  select Form
if (!"token") {
  signApp.style.display = "block";
  loginApp.style.display = "none";
  console.log("token yo'q");
} else if ("token") {
  signApp.style.display = "none";
  loginApp.style.display = "block";
  console.log("token bor");
}

//    Main section  //   For Log in
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
    phone: e.target.phone.value,
  };

  (async function () {
    try {
      const res = await fetch("https://backend.gazoil.uz/accounts/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        window.location.href = "http://127.0.0.1:5500/pages/Admin.html";
      } else {
        let error = document.querySelector(".err-message");
        error.style.display = "block";
        error.innerHTML = `Bunday foydalanuvchi mavjud emas ! <br/> 
        Iltimos E-mail   yoki Parol ni tekshiring `;

        setTimeout(() => {
          error.style.display = "none";
        }, 3000);
      }
      localStorage.setItem("token", "token");
    } catch (error) {
      console.log(error);
    }
  })();
});
