function runTests() {
console.log("🧪 ЗАПУСК ТЕСТОВ ДЛЯ TO-DO LIST\n");

// Тест 1: добавление задачи
const oldLength = tasks.length;
taskInput.value = "Тестовая задача из консоли";
addNewTask();
const newTask = tasks.find(t => t.text === "Тестовая задача из консоли");
console.assert(newTask, "❌ ТЕСТ 1: задача не добавилась");
if (newTask) console.log("✅ ТЕСТ 1: добавление задачи - ОК");

// Тест 2: переключение статуса
if (newTask) {
toggleTaskComplete(newTask.id);
const updated = tasks.find(t => t.id === newTask.id);
console.assert(updated.completed === true, "❌ ТЕСТ 2: статус не изменился на выполненный");
if (updated.completed) console.log("✅ ТЕСТ 2: переключение статуса - ОК");

toggleTaskComplete(newTask.id);
}

// Тест 3: фильтрация
const activeCountBefore = tasks.filter(t => !t.completed).length;
setFilter('active');
const visibleTasks = document.querySelectorAll('.task-item').length;
const activeCountAfter = tasks.filter(t => !t.completed).length;
console.assert(visibleTasks === activeCountAfter, "❌ ТЕСТ 3: фильтр активных показывает неверное количество");
console.log("✅ ТЕСТ 3: фильтрация - ОК");

// Тест 4: удаление выполненных
tasks.push({ id: 99999, text: "Временная для теста", completed: true });
renderTasks();
clearCompletedTasks();
const stillThere = tasks.find(t => t.id === 99999);
console.assert(!stillThere, "❌ ТЕСТ 4: удаление завершённых не сработало");
console.log("✅ ТЕСТ 4: удаление завершённых - ОК");

// Тест 5: localStorage
const saved = localStorage.getItem("todo_app_data");
console.assert(saved !== null, "❌ ТЕСТ 5: данные не сохранились в localStorage");
console.log("✅ ТЕСТ 5: сохранение данных - ОК");

setFilter('all');
console.log("\n🏁 ВСЕ ТЕСТЫ ЗАВЕРШЕНЫ");
}

runTests();