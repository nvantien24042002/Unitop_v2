const TODOLIST_APP = "TODOLIST_APP";
// localStorage.removeItem(TODOLIST_APP);
/* ===== DOM ===== */
const formAddTask = document.forms.add_task;
const toDoList = document.getElementById("todo_list");
const todoFooter = document.getElementById("todo_footer");

/* ===== CONSTANT ===== */

/* ===== STATE ===== */
let editIndex = null;

/* ===== STORAGE ===== */
function loadData() {
  const data = localStorage.getItem(TODOLIST_APP);
  return data ? JSON.parse(data) : [];
}
function saveData(data) {
  localStorage.setItem(TODOLIST_APP, JSON.stringify(data));
}
// console.log("loadData:", loadData());

/* ===== RENDERFOOTER ===== */
function renderFooter() {
  const data = loadData();
  //hàm filter lấy các task completed
  const completedCount = data.filter((task) => task.is_complete).length;

  if (completedCount === 0) {
    todoFooter.innerHTML = "";
    return;
  }

  const text =
    completedCount === 1
      ? "Yeah, 1 task completed"
      : `Yeah, ${completedCount} tasks completed`;

  todoFooter.innerHTML = text;
}
// ===== CreateTaskItem =======//
const createTaskItem = (task, index) => {
  return `
    <span class="task-text" data-index="${index}">
      ${task}
    </span>

    <div class="actions">
      <button class="edit-btn" data-index="${index}" title="Edit">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button class="delete-btn" data-index="${index}" title="Delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;
};
/* ===== RENDER ===== */
function renderTasks() {
  const data = loadData();
  toDoList.innerHTML = "";

  if (data.length === 0) return;

  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = item.is_complete ? "completed" : "";

    li.innerHTML = createTaskItem(item.task, index);

    toDoList.appendChild(li);
  });

  renderFooter();
}

/* ===== ACTIONS ===== */
function addTask(taskValue) {
  const data = loadData();
  data.push({
    task: taskValue,
    is_complete: false,
  });
  saveData(data);
}

function editTask(index) {
  const data = loadData();
  // Clear old highlight
  [...toDoList.children].forEach((li) => li.classList.remove("editing"));
  // Highlight the task being edited
  const li = toDoList.children[index];
  if (li) li.classList.add("editing");
  // Add the task to the input
  formAddTask.task.value = data[index].task;
  editIndex = index;
  // UX
  formAddTask.querySelector("button").innerText = "UPDATE TASK";
  formAddTask.task.focus();
}

function deleteTask(index) {
  index = Number(index);
  const ok = confirm("Delete this task?");
  if (!ok) return;
  const li = toDoList.children[index];
  if (!li) return;
  // ADD class animation
  li.classList.add("removing");
  // Wait animation done delete
  setTimeout(() => {
    const data = loadData();
    data.splice(index, 1);
    saveData(data);
    renderTasks();
  }, 250);
}

function toggleComplete(index) {
  const data = loadData();

  if (!data[index]) return null;

  data[index].is_complete = !data[index].is_complete;
  saveData(data);
  renderTasks();
  return data[index];
}

/* ===== EVENT: TODO LIST ===== */
toDoList.addEventListener("click", function (e) {
  const editBtn = e.target.closest(".edit-btn");
  const deleteBtn = e.target.closest(".delete-btn");
  const taskText = e.target.closest(".task-text");

  if (editBtn) {
    editTask(editBtn.dataset.index);
    return;
  }

  if (deleteBtn) {
    deleteTask(deleteBtn.dataset.index);
    return;
  }

  if (taskText) {
    toggleComplete(taskText.dataset.index);
  }
});

/* ===== EVENT: FORM ===== */
formAddTask.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskValue = this.task.value.trim();
  if (!taskValue) return;

  const data = loadData();

  if (editIndex === null) {
    addTask(taskValue);
  } else {
    data[editIndex].task = taskValue;
    saveData(data);
    editIndex = null;
    this.querySelector("button").innerText = "ADD TASK";
  }

  this.reset();
  renderTasks();
});

/* ===== INIT ===== */
renderTasks();

// remove locastogae
// function removeData() {
//   localStorage.removeItem(TODOLIST_APP);
// }
// removeData();
// Test trên console
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && editIndex !== null) {
    cancelEdit();
  }
});
function cancelEdit() {
  editIndex = null;
  formAddTask.reset();
  formAddTask.querySelector("button").innerText = "ADD TASK";
}
window.test = {
  loadData,
  saveData,
  addTask,
  editTask,
  toggleComplete,
  deleteTask,
  renderTasks,
};
