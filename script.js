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



// Refactor code to add tasks to the list, but keep the same functionality
// Refactor to use firebase to save tasks
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

    const timeLabel = document.createElement('label');
    const currTime = new Date().toLocaleString();
    timeLabel.appendChild(document.createTextNode('Added at: ' + currTime));
    li.appendChild(timeLabel);

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
        const newTask = document.createElement('input');
        newTask.type = 'text';
        newTask.id = 'edit-task-input';
        newTask.value = task;
        newTask.style.display = 'block';
        li.appendChild(newTask);

        const newDueDate = document.createElement('input');
        newDueDate.type = 'datetime-local';
        newDueDate.id = 'edit-due-date';
        newDueDate.value = dueDate;
        newDueDate.style.display = 'block';
        li.appendChild(newDueDate);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.marginLeft = '10px';
        li.appendChild(saveButton);

        const cancelEditButton = document.createElement('button');
        cancelEditButton.id = 'cancel-edit';
        cancelEditButton.textContent = 'Cancel';
        cancelEditButton.style.marginLeft = '10px';
        li.appendChild(cancelEditButton);

        // Hide edit button while editing
        editButton.style.display = 'none';

        saveButton.addEventListener('click', () => {
            const updatedTask = newTask.value.trim();
            const updatedDueDate = newDueDate.value.trim();

            if (updatedTask !== '') {
                task = updatedTask;
            }
            if (updatedDueDate !== '') {
                dueDate = updatedDueDate;
            }

            // Update the list item text
            li.textContent = `Task no.${numberOfTasks}: ${task} - Due: ${new Date(dueDate).toLocaleString()}`;

            // Re-append buttons
            li.appendChild(label);
            li.appendChild(completeButton);
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            // Show edit button again
            editButton.style.display = 'inline';
        });

        cancelEditButton.addEventListener('click', e => {
            e.preventDefault();
            newTask.style.display = 'none';
            newDueDate.style.display = 'none';
            saveButton.style.display = 'none';
            cancelEditButton.style.display = 'none';
            editButton.style.display = 'inline';
        });
    });


    deleteButton.addEventListener('click', () => {
        const confirmDelete = confirm(`Are you sure you want to delete "Task no.${numberOfTasks}: ${task}"?\nThis action cannot be undone.`);
        if (confirmDelete) {
            taskList.removeChild(li);
        }
    });
}