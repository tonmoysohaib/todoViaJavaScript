# 📝 JavaScript Console To-Do List

A simple JavaScript program that manages and displays a list of to-do tasks using an array of objects. The tasks are divided into **Completed** and **Pending** using filtering and displayed in the console.



# 📝 JavaScript To-Do List (Table View)

This project maintains a list of tasks and separates them into **Pending** and **Completed** using JavaScript. Below is the current list of tasks:

---

## ⏳ Pending Tasks

| No. | Task Title               | Status     |
|-----|--------------------------|------------|
| 1   | Call Mom                 | ❌ Not Done |
| 2   | Editing Picture          | ❌ Not Done |
| 3   | 30 minutes of coding     | ❌ Not Done |
| 4   | Take medicine            | ❌ Not Done |
| 5   | Write a novel            | ❌ Not Done |

---

## ✅ Completed Tasks

| No. | Task Title        | Status   |
|-----|-------------------|----------|
| 1   | Homework 101      | ✅ Done  |
| 2   | Prayer            | ✅ Done  |
| 3   | Read a book       | ✅ Done  |

---

## 📌 Note

These tables are generated manually based on the current array data. If you update the JavaScript code, remember to reflect changes here too.



---
## 🧠 Data Structure
Each to-do item is an object with two properties:
```js
{
  title: "Task Title",
  done: true // or false
}



💻 How It Works
Filters tasks into:
✅ Completed tasks

⏳ Pending tasks

Uses .forEach() to display them with numbering

All output is shown in the browser or Node.js console










✅ Example Code
// Create array of todo objects
const todos = [
  { title: "Homework 101", done: true },
  { title: "Call Mom", done: false },
  { title: "Editing Picture", done: false },
  { title: "Prayer", done: true },
  { title: "30 minutes of coding", done: false },
  { title: "Take medicine", done: false },
  { title: "Read a book", done: true },
  { title: "Write a novel", done: false },
];

// Filter tasks by completion status
const completedTask = todos.filter((todo) => todo.done === true);
const pendingTask = todos.filter((todo) => todo.done === false);

// Display completed tasks
console.log("-----------------------");
console.log("✅ Completed Tasks:");
console.log("-----------------------");
completedTask.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

// Display pending tasks
console.log("-----------------------");
console.log("⏳ Pending Tasks:");
console.log("-----------------------");
pendingTask.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

📦 Example Output
-----------------------
✅ Completed Tasks:
-----------------------
1. Homework 101
2. Prayer
3. Read a book
-----------------------
⏳ Pending Tasks:
-----------------------
1. Call Mom
2. Editing Picture
3. 30 minutes of coding
4. Take medicine
5. Write a novel




📄 License
This project is open-source and free to use and modify.
```
