//   import data from "./admin.js";
//   console.log(data);

//  const elMain = document.querySelector(".main")
// let arr = [];



// fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data`)
// .then(res => res.json())
// .then(data => {
// arr = data.data;
// renderObj(arr)
// } )
// function render(arr) {
    // const fragment = document.createDocumentFragment();
    // arr.forEach(element => {
    //    const card = document.createElement("div")
    //    card.className = "bg-info p-2"
    //    card.innerHTML = `
    //    <img src="${element.avatar}"></img>
    //    <h3>${element.title}<h3/>
    //    <p>${element.subtitle}<p/>
    //    <p>${element.createdAt}<p/> 
    //    ` 
    //    card.appendChild(fragment)
    //    elMain.appendChild(card)
    // });


//     function renderObj(arr) {
//         const fragment = document.createDocumentFragment();
//         arr.forEach(element => {
//             const card = document.createElement("div")
//             card.className = "card bg-secondary bg-opacity-50 mb-5"
//             card.innerHTML = `
//         <img src="${element.avatar}"></img>
//         <h3>${element.title}<h3/>
//         <p>${element.subtitle}<p/>
//     <p>${element.createdAt}<p/> 
//        ` 
//             card.appendChild(fragment)
//             elMain.appendChild(card)
//         });
// }














const elMain = document.querySelector(".main")
let films = [];


fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data`)
    .then(res => res.json())
    .then(data => {
        films = data  ;
        console.log(films);
        renderObj(films);
    })
function renderObj(films) {
    const fragment = document.createDocumentFragment();
    films.forEach(element => {
        const card = document.createElement("div")
        // card.className = "card bg-secondary bg-opacity-50 mb-5"
        card.className = "card d-flex justify-content-center  p-2 bg-secondary bg-opacity-50 mb-5"
            card.innerHTML = `
        <img class="" src="${element.avatar}"></img>
        <div class="">
        <h3>${element.title}<h3/>
        <p>${element.subtitle}<p/>
    <p class="mb-2"> ${element.createdAt}<p/>
    </div>
       `
       
        card.appendChild(fragment)
        elMain.appendChild(card)
    });
}

