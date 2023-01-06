 import { findElement } from "./findElement.js";
 const elTodoTemplate = findElement("#todo-template");
 export function rendertodos(todos, parent) {
    const todoFragment = document.createDocumentFragment();

    parent.textContent = "";
    todos.forEach((todo, i) => {
        const cloneTemplate = elTodoTemplate.content.cloneNode(true);
        const index = findElement(".todo-index", cloneTemplate);
        const title = findElement(".todo-title", cloneTemplate);
        const editBtn = findElement(".bg-info", cloneTemplate);
        const deleteBtn = findElement(".bg-danger", cloneTemplate);

        title.textContent = todo.title;
        index.textContent = i + 1;
        editBtn.dataset.id = todo.id;
        deleteBtn.dataset.id = todo.id;

        todoFragment.appendChild(cloneTemplate);
 

        // console.log(index,title, editBtn,deleteBtn);
    });
    parent.appendChild(todoFragment);
}