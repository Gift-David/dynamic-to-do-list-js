document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    function addTask() {
        let taskText = taskInput.value.trim()
        if (taskText == "") {
            alert("Enter a task")
        } else {
            let listItem = document.createElement('li')
            listItem.textContent = taskText

            removeButton = document.createElement('button')
            removeButton.className = "remove-btn"
            removeButton.textContent = "Remove"

            listItem.append(removeButton)
            taskList.appendChild(listItem)

            removeButton.addEventListener('click', () => { taskList.removeChild(listItem)})

            taskInput.value = ""
        }
    }
    taskInput.addEventListener('keypress', (event) => {
                if (event.key == "Enter"){
                    addTask();
                }
            })
    addButton.addEventListener('click', addTask)
})