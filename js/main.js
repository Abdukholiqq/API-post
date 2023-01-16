const elMain = document.querySelector(".main");
//  Sign up   //
const Sign = document.querySelector(".sign");
const signApp = document.querySelector(".sign-app");
const SignUp = document.querySelector(".sign-up");

Sign.addEventListener("click", (e) => {
  window.location.replace("http://127.0.0.1:5500/pages/login.html");
  // signApp.style =
  //   "d-block;  position: absolute; width: 100%; z-index: 50000; height: 100%; background-color: #d5d2ea;";
});
// SignUp.addEventListener("click" , (e)=> {
//     e.preventDefault();
//     // window.location.replace("./Admin.html");
// })

// const elForm = document.querySelector(".form");

// elForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = {
//     email: e.target.email.value,
//     number: e.target.number.value,
//     password: e.target.password.value,

//     name: 'name',
//     inn: '123123',
//     company_name: 'kompany',
//     type: 'partner',
//     bank_accaunt: 'asdasd',
//     bank_name:'bank',
//     mfo:'12123123321123',
//     company_addres: 'asdasdwqeq',
//   };
//   (async function () {
//     try {
//       const res = await fetch("https://backend.gazoil.uz/accounts/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await res.json();
//       console.log(result);
//     } catch (err) {
//       console.log(err);
//     }
//   })();
// });

//  ++++++++++   //












//   get  posts  //
fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data`)
  .then((res) => res.json())
  .then((data) => {
    renderObj(data);
  });
function renderObj(data) {
  const fragment = document.createDocumentFragment();
  data.forEach((element) => {
    const card = document.createElement("div");
    card.className =
      "card d-flex justify-content-center w-50 p-2 bg-secondary bg-opacity-50 ";
    card.innerHTML = `
            <div class="d-flex gap-3">
        <img  style="min-width: 300px ; max-width:300px; height :280 ; border-radius : 5px" src="${element.avatar}"></img>
        <div>
          <h3 class="fs-5">${element.title}<h3/>
          <p class="fs-6">${element.subtitle}<p/>
          <p class="fs-6 mb-2"> ${element.createdAt}<p/>
         </div>
         </div>
       `;
    card.appendChild(fragment);
    elMain.appendChild(card);
  });
}
