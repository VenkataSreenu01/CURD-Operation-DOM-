const form = document.querySelector("#new-task-form");
const input = document.querySelector("#name");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = input.value;
  if (!userData) {
    alert("please give some task before submitting!");
    return;
  }
  const task = document.createElement("div");
  task.classList.add("task");

  const content = document.createElement("div");
  content.classList.add("content");

  const task_input = document.createElement("input");
  task_input.classList.add("new_task");
  //  task_input.classList.add('form_control')
  task_input.value=userData;
  task_input.setAttribute("readonly","readonly")
  task_input.type= "text"
  content.appendChild(task_input)
  task.appendChild(content)
  tasks.appendChild(task)

  const actions= document.createElement('div')
  actions.classList.add("actions")

  const task_edit=document.createElement("button")
  task_edit.classList.add("edit")
  task_edit.classList.add("style")
  task_edit.innerHTML="edit"
  
  const task_delete=document.createElement("button")
  task_delete.classList.add("delete")
  task_delete.setAttribute("style","style")
  task_delete.innerHTML="delete"

  actions.appendChild(task_edit)
  actions.appendChild(task_delete)
  task.appendChild(actions)

  input.value=""

  //Edit user data
  task_edit.addEventListener('click',()=>{
    if(task_edit.innerHTML=="Edit"){
    task_input.removeAttribute('readonly')
    task_edit.innerHTML="save"
    task_input.focus()
    }else{
        task_input.setAttribute("readonly","readonly")
        task_edit.innerHTML="Edit"
    }
})
//Delete user data

task_delete.addEventListener("click",()=>{
    tasks.removeChild(task)
})
});
