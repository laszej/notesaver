const addTask = document.getElementById("dodaj");
const removeTask = document.getElementById("usun");
const input = document.getElementById("input")
const lista = document.getElementById('lista');
const form = document.getElementById("form")
//const deleteBtn = document.getElementById("delete")

let todos = JSON.parse(localStorage.getItem("todos")) || []

    lista.innerHTML = todos
    addTask.addEventListener("click", ()=> {
    let todo = `<div class="content" style="float:left">${input.value}</div>`   
    todos+=todo  
    localStorage.setItem("todos", JSON.stringify(todos))
    todos = JSON.parse(localStorage.getItem("todos"))
    lista.innerHTML = todos
    input.value=""
    })

    removeTask.addEventListener("click", ()=>{
     deleteAll()
    })

    function deleteAll()
    {localStorage.clear();
    lista.innerHTML = ""  
    todos=""
    }

  function remove()
    {  let wyjeb0 = document.querySelector(".content")
      wyjeb0.remove()
    }

    /*<button style=
    "margin-left:70%; background: lightgray; border: none"; onclick="remove()">
    <img src="delete.png"></button> */
                                    
