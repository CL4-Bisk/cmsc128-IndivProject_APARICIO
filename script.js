const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', e => {
    e.preventDefault();
    taskList.style.display = 'block';
});