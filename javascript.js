document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const incompleteList = document.getElementById('incompleteList');
    const completedList = document.getElementById('completedList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault(); // JavaScript Event Object [cite: 58]

        // Accessing Elements [cite: 54]
        const taskText = document.getElementById('taskInput').value;
        const category = document.getElementById('categoryInput').value;
        const priority = document.getElementById('priorityInput').value;
        const date = document.getElementById('dateInput').value;

        // Form Validation Basics [cite: 59]
        if (!taskText || !date) {
            alert("Please fill in all fields.");
            return;
        }

        // Modifying Element Properties [cite: 55]
        const li = document.createElement('li');
        li.innerHTML = `${taskText} (${category} - ${priority}) [Due: ${date}] 
                        <button onclick="completeTask(this)">Done</button>`;
        incompleteList.appendChild(li);
        taskForm.reset();
    });
});

function completeTask(btn) {
    const li = btn.parentElement;
    li.classList.add('completed'); // Manipulating CSS Classes 
    btn.remove();
    document.getElementById('completedList').appendChild(li);
}
