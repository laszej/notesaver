const addTask = document.getElementById("dodaj");
const removeTask = document.getElementById("usun");
const input = document.getElementById("input")
const lista = document.getElementById('lista');
const form = document.getElementById("form")
const deleteBtn = document.querySelector(".delete")

let todos = JSON.parse(localStorage.getItem("todos")) 

lista.innerHTML = todos

main()

    function main() {
    if(todos === null){
      todoArray = []}else{
        todoArray = todos;
    }
    if(input.value.trim()!=="")
    {var todo = input.value
    todoArray.push(todo)}
    localStorage.setItem("todos", JSON.stringify(todoArray))
    todos = JSON.parse(localStorage.getItem("todos"))
    lista.innerHTML = todos
    let html = '';
    todos.forEach((data, index )=> {
    html += `
    <div class="content">
    <p>${data}</p>
    <button class="deleteBtn"  onclick="deleteItem(${index})"><img src="delete.png"></button>
    </div>
    `
  })
  lista.innerHTML = html;
    input.value=""
    }

    
    input.addEventListener("keydown", (e)=>{if(e.key === "Enter"){main()}})

    removeTask.addEventListener("click", ()=>{deleteAll()})

    function deleteAll()
    {localStorage.clear();
    lista.innerHTML = ""  
    todos=""
    location.reload()
    }

  function remove()
    {  let wyjeb0 = document.querySelector(".content")
      wyjeb0.remove()
    }

    function deleteItem(index){
      todos.splice(index, 1)
      console.log(todos)
      main()    
  }

  
