// export default fetch ;
import { findElement } from "./findElement.js";
const elMain = findElement(".main");
const addForm = findElement("#form");
const addBtn = findElement("#add-todo-btn");
const input = findElement("input")
let films = [];


fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data`)
    .then(res => res.json())
    .then(data => {
        films = data
        console.log(data, "14-qator");

        renderObj(films);
    })
function renderObj(films) {
    const fragment = document.createDocumentFragment();
    films.forEach(element => {
        const card = document.createElement("div")
        card.className = "card w-25  p-2 bg-secondary bg-opacity-50 "
        card.innerHTML = `
        <img class="w-100" style="min-height: 100px" src="${element.avatar}"></img>
        <div class="text-center p-2" >
        <h3 class="fs-5">${element.title}<h3/>
        <p class="fs-5">${element.subtitle}<p/>
    <p class="fs-5">${element.createdAt}<p/>
    </div>
    <div class="d-flex justify-content-center gap-3">
       <button data-id="${element.id}"  class="delate w-50  rounded-2 bg-danger border-0" type="reset">Delete</button>
       <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${element.id}" class="edit w-50 rounded-2 bg-success bg-opacity-75  border-0">Edit</button>
   </div>
       `

        card.appendChild(fragment)
        elMain.appendChild(card)
    });

}

//   >>   PUSH   <<
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    elMain.textContent = "";
    const elTitle = findElement(".title");
    const elSubtitle = findElement(".subtitle");
    const elDate = findElement(".date");
    const elImg = findElement(".image");

    console.log(elTitle.value, elSubtitle.value, elDate.value, elImg.value)
    // const  input = e.target.data;
    const newTodo = {
        title: elTitle.value,
        subtitle: elSubtitle.value,
        createdAt: elDate.value,
        avatar: elImg.value,
        id: films.length + 1

    }
    console.log(newTodo);
    films.push(newTodo)
    // console.log(films);
    // let id = films.length + 1 ;
    fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data`, {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify(newTodo)
    }).then((res) => res.json())
        .then((data) => {

            // data.push(films)
            console.log(data);
            console.log(films);
            renderObj(films)
            // window.location.reload()
        })
    })
renderObj(films)








// delate \\
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

    //  edit \\
    if (TargetT.matches(".edit")) {
        const id = e.target.dataset.id;
        console.log(id);
        fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json"
            },
        }).then(res => res.json())
            .then((films) => {
                const title = findElement("#title");
                const subtitle = findElement("#subtitle");
                const image = findElement("#images");
                const date = findElement("#date");

                addBtn.addEventListener("click", function () {
                    const newPost = {
                        title: title.value,
                        subtitle: subtitle.value,
                        avatar: image.value,
                        createdAt: date.value,
                    }

                    title.textContent = newPost.title.value;
                    subtitle.textContent = newPost.subtitle;
                    image.textContent = newPost.avatar;
                    date.textContent = newPost.createdAt;
                    console.log(newPost.title, films.subtitle, films.avatar);
                    console.log(title);

                    fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newPost)
                    }).then(res => res.json()).then(res => console.log("ishladi")
                        // location.reload()
                    )
                })
            })
    }
})