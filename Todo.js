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
