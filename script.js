const addButton = document.getElementById('add-task-btn');
const cancelButton = document.getElementById('cancel');
const taskForms = document.getElementById('task-forms');
const taskList = document.getElementById('task-list');
const submitButton = document.getElementById('submit');
const forms = document.getElementById('todo-form');
let numberOfTasks = 0;


addButton.addEventListener('click', e => {
    e.preventDefault();
    taskForms.style.display = 'block';
    cancelButton.style.display = 'inline';
});


submitButton.addEventListener('click', e => {
    e.preventDefault();
    taskList.style.display = 'block';
    addTaskInterface();    
});


cancelButton.addEventListener('click', e => {
    e.preventDefault();
    taskForms.style.display = 'none';
    cancelButton.style.display = 'none';
    forms.reset();
});


function addTaskInterface(task, dueDate) {
    numberOfTasks = taskList.getElementsByTagName('li').length + 1;
    task = document.getElementById('task-input').value || "Unnamed Task";
    dueDate = document.getElementById('due-date').value || new Date().toISOString().slice(0,16);
    const li = document.createElement('li');
    li.textContent = `Task no.${numberOfTasks}: ${task} - Due: ${new Date(dueDate).toLocaleString()}`;
    forms.reset();
    taskList.appendChild(li);


    const completeButton = document.createElement('input');
    completeButton.type = 'checkbox';
    completeButton.id = "checkbox";


    const label = document.createElement('label');
    label.htmlFor = "checkbox";
    label.appendChild(document.createTextNode('Mark as done'));
    li.appendChild(label);


    completeButton.style.marginLeft = '10px';
    li.appendChild(completeButton);


    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.style.marginLeft = '10px';
    li.appendChild(editButton);


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    li.appendChild(deleteButton);


    completeButton.addEventListener('change', () => {
        if (completeButton.checked) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    });


    editButton.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', task);
        const newDueDate = prompt('Edit due date (YYYY-MM-DDTHH:MM):', dueDate);
        if (newTask !== null && newTask.trim() !== '') {
            task = newTask;
        }
        if (newDueDate !== null && newDueDate.trim() !== '') {
            dueDate = newDueDate;
        }
        li.textContent = `Task no.${numberOfTasks}: ${task} - Due: ${new Date(dueDate).toLocaleString()}`;
        li.appendChild(label);
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    });


    deleteButton.addEventListener('click', () => {
        const confirmDelete = confirm(`Are you sure you want to delete "Task no.${numberOfTasks}: ${task}"?\nThis action cannot be undone.`);
        if (confirmDelete) {
            taskList.removeChild(li);
        }
    });
}