const TASKS_STORAGE_KEY = 'todo-app-tasks';

export const getTasks = () => {
  const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const createTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

export const updateTask = (taskId, updatedTask) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks[index] = updatedTask;
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }
};

export const deleteTask = (taskId) => {
  const tasks = getTasks();
  const filteredTasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(filteredTasks));
};

export const getUser = async () => {
    const res = await fetch('https://randomuser.me/api');
      const {results} = await res.json();
      return results;
}