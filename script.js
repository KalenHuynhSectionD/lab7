const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li')
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed', checkbox.checked);    
    });

    const taskSpan = document.createElement('span')
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(taskSpan);
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
});