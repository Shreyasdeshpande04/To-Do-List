let tasks = [];

function addTask() {
    let taskName = document.getElementById("task-name").value;
    if (taskName.trim() !== "") {
        let timestamp = new Date().toLocaleString();
        let task = {
            name: taskName,
            timestamp: timestamp,
            completed: false
        };
        tasks.push(task);
        displayTasks();
        document.getElementById("task-name").value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    let newTaskName = prompt("Enter new task name:");
    if (newTaskName !== null && newTaskName.trim() !== "") {
        tasks[index].name = newTaskName;
        tasks[index].timestamp = new Date().toLocaleString();
        displayTasks();
    }
}

function markAsDone(index) {
    tasks[index].completed = true;
    displayTasks();
}

function displayTasks() {
    let table = document.getElementById("task-table");
    table.innerHTML = `
        <tr>
            <th>Serial Number</th>
            <th>Task Name</th>
            <th>Date Added</th>
            <th>Time Added</th>
            <th>Actions</th>
        </tr>
    `;
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let row = document.createElement("tr");
        let serialNumberCell = document.createElement("td");
        let taskNameCell = document.createElement("td");
        let dateAddedCell = document.createElement("td");
        let timeAddedCell = document.createElement("td");
        let actionsCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        let editButton = document.createElement("button");
        let markAsDoneButton = document.createElement("button");

        serialNumberCell.textContent = i + 1;
        taskNameCell.textContent = task.name;
        dateAddedCell.textContent = task.timestamp.split(",")[0];
        timeAddedCell.textContent = task.timestamp.split(",")[1];

        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(i);
        };

        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editTask(i);
        };

        markAsDoneButton.textContent = "Mark as Done";
        markAsDoneButton.onclick = function() {
            markAsDone(i);
        };

        actionsCell.appendChild(deleteButton);
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(markAsDoneButton);

        if (task.completed) {
            taskNameCell.classList.add("completed");
        }

        row.appendChild(serialNumberCell);
        row.appendChild(taskNameCell);
        row.appendChild(dateAddedCell);
        row.appendChild(timeAddedCell);
        row.appendChild(actionsCell);

        table.appendChild(row);
    }
}