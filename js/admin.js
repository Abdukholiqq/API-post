 import { findElement } from "./findElement.js"; 
const elMain = findElement(".main");
const elTop = findElement(".top");
const TopBtn = findElement(".top-btn")
const addForm = findElement("#form");
const addBtn = findElement("#add-todo-btn");
const elPopularPost = document.querySelector(".popular-post");

//   >>   PUSH   <<
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let elTitle =  e.target.title.value;
    let elSubtitle = e.target.subtitle.value;
    let elCreatedAt =  e.target.createdAt.value;
    let elImg = e.target.image.value;
 
    const newTodo = {
        title: elTitle,
        subtitle: elSubtitle,
        createdAt: elCreatedAt,
        avatar: elImg,
    }
    
    fetch("https://639f72975eb8889197fce7ef.mockapi.io/post/data", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((res) => res.json())
    .then((data) => {
            window.location.reload()
        })
    })

//  GET   top   section

let popularPosts = [];

function renderPosts(array, parent = elPopularPost) {
  const fragment = document.createDocumentFragment();
  array.forEach((element) => {
    const elPost = document.createElement("a");
    elPost.className = "w-25 shadow  p-2 rounded-3 text-decoration-none   ";
    elPost.innerHTML = `
    <div class="">
    <img src="${element.avatar}" alt = "image" width="150" height='120' />
    <h5>${element.title}<h5/>
    <hr/>
    <p>${element.subtitle}<p/>
    <hr/>
    <div class="d-flex justify-content-center gap-3">
       <button data-id="${element.id}"  class="delate w-50  rounded-2 bg-danger border-0" type="reset">Delete</button>
       <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${element.id}" class="edit w-50 rounded-2 bg-success bg-opacity-75  border-0">Edit</button>
   </div>
    <div/>
    `;
    fragment.appendChild(elPost); 
    elPopularPost.appendChild(fragment);
  });
}

const getData = async () => {
  try {
    const res = await fetch(
      `https://639f72975eb8889197fce7ef.mockapi.io/post/data`
      //   `https://63c3b5c0a9085635752b7972.mockapi.io/create`
    );
    const data = await res.json();
    popularPosts = data;
    renderPosts(popularPosts);
  } catch (error) {
    console.log(error);
  }
};

getData();








    // GET    main section
    fetch("https://639f72975eb8889197fce7ef.mockapi.io/post/data")
    .then(res => res.json())
    .then(data =>  data.forEach(element => {
        console.log(element.title);
        console.log(element.id);
        const card = document.createElement("div");
        card.className = "card w-25  p-2 bg-secondary shadow bg-opacity-50 "
        card.innerHTML = `
        <img class="w-100" style="height: 200px" src="${element.avatar}"></img>
        <div class="text-center p-2" >
        <h3 class="fs-5">${element.title}<h3/>
        <hr/>
        <p class="fs-6">${element.subtitle}<p/>
        <hr/>
        <p class="fs-6">${element.createdAt}<p/>
        </div>
        <div class="d-flex justify-content-center gap-3">
        <button data-id="${element.id}"  class="delate w-50  rounded-2 bg-danger border-0" type="reset">Delete</button>
        <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${element.id}" class="edit w-50 rounded-2 bg-success bg-opacity-75  border-0">Edit</button>
        </div>
        `
        elMain.prepend(card)
    }));

//  OVOZ ORQALI POST YOZISH
// const body = document.querySelector("body");
// const h1 =  document.createElement("h1");
// const recognition = new webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;
    
//     document.body.onclick = function (){
//         recognition.start();
//         console.log('Ready to receive a color command.');
//     };
//     recognition.onresult = function(event){
//         const color = event.results[0][0].transcript;
//         const ovoz = event.results[0][0].transcript;
//         h1.textContent = ovoz;
//         body.prepend(h1)
//         body.style.backgroundColor = color; 
//     }
 

// DELETE \\
elMain.addEventListener("click", function (e) {
    const TargetT = e.target;
    const id = e.target.dataset.id;
    // console.log(id);
    if (TargetT.matches(".delate")) {
        fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(() => {
            window.location.reload()
        })

    }

    //  EDIT \\
    if (TargetT.matches(".edit")) {
        const id = e.target.dataset.id;
        console.log(id);
        fetch(`https://63c3b5c0a9085635752b7972.mockapi.io/create/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "aplication/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const title = findElement("#title");
            const subtitle = findElement("#subtitle");
            const image = findElement("#images");
            const createdAt = findElement("#createdAt");
            const imagess = findElement("#imagess");

            title.value = data.isTop;
            subtitle.value = data.subtitle;
            image.value = data.avatar;
            createdAt.value = data.createdAt;
            imagess.src = image.value;

            addBtn.addEventListener("click", function () {
              const newPost = {
                title: title.value,
                subtitle: subtitle.value,
                avatar: image.value,
                createdAt: createdAt.value,
              };
              fetch(
                `https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newPost),
                }
              )
                .then((res) => res.json())
                .then((res) => location.reload());
            });
          });
    }
})