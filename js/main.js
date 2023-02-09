const elMain = document.querySelector(".main");
const elPopularPost = document.querySelector(".popular-post");
const Sign = document.querySelector(".sign");
//  Sign up   //
Sign.addEventListener("click", (e) => {
  window.location.replace("http://127.0.0.1:5500/pages/login.html");
});

//  ++++++++++   //

let popularPosts = [];

function renderPosts(array, parent= elPopularPost) {
  const fragment =document.createDocumentFragment();
  array.forEach((element) => {
    const elPost = document.createElement('a')
    elPost.innerHTML=`
    
    <img src="${element.banner}" alt = "image" width='60' height='60' />
    `
    fragment.appendChild(elPost)
    console.log(element.createdAt);
    elPopularPost.appendChild(fragment)
  });
}
// ++++++
// const getData = async () => {
//   try {
//     const res = await fetch(
//       `https://63c3b5c0a9085635752b7972.mockapi.io/create`
//     );
//     const data = await res.json();
//     popularPosts = data;
//     renderPosts(popularPosts)
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();













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
      "card d-flex justify-content-center w-75 p-2 bg-secondary bg-opacity-50 ";
    card.innerHTML = `
            <div class="d-flex gap-3">
        <img  style="min-width: 300px ; max-width:280px; height :280px ; border-radius : 5px" src="${element.avatar}"></img>
        <div>
          <h3 class="fs-4">${element.title}<h3/>
          <p class="fs-6">${element.subtitle}<p/>
          <p class="fs-6 mb-2"> ${element.createdAt}<p/>
         </div>
         </div>
       `;
    card.appendChild(fragment);
    elMain.appendChild(card);
  });
}
