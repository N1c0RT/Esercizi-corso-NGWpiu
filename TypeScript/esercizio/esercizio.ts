const button_aggiunta = document.getElementById("aggiunta")!;

const nuovo_task = document.getElementById("nuovo-task")! as HTMLInputElement;

const todoList = document.getElementById("lista-task")! as HTMLUListElement;

type ToDoItem = {
    id: number;
    task: string;
};

let ToDoList: ToDoItem [] = [];

let counter = 0 

function aggiungiTask(task: string): void {

    const newItem: ToDoItem = {
        id: counter++,
        task: task,
    };

    ToDoList.push(newItem);
    renderizzaTodo()
}

function renderizzaTodo(): void {
    todoList.innerHTML = '';
    ToDoList.forEach(item => {

        const li = document.createElement('li')
        li.textContent = item.task;

        li.addEventListener("click", function(){
            rimuoviToDo(item.id)
        })
            
        todoList.appendChild(li);
            
    });
}

function rimuoviToDo(id: number): void {
    ToDoList = ToDoList.filter((item) => item.id !== id),
    renderizzaTodo();
}

button_aggiunta.addEventListener("click", () => {
    if (nuovo_task.value.trim()) {
        aggiungiTask(nuovo_task.value.trim());
        nuovo_task.value = "";
    }
});