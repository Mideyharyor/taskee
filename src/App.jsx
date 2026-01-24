import { useState, useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "active", "completed"
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('taskee-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const isInitialMount = useRef(true);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('taskee-tasks');

    if (savedTasks) {
      try {
        setTaskList(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever they change (but not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    localStorage.setItem('taskee-tasks', JSON.stringify(taskList));
  }, [taskList]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('taskee-theme', darkMode ? 'dark' : 'light');
    // Apply dark class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTask = (id) => {
    setTaskList(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const deleteTask = (id) => {
    setTaskList(prev => prev.filter(task => task.id !== id))
  }

  // Filter and search logic
  const filteredTasks = taskList.filter(task => {
    // Apply status filter
    if (filter === "active" && task.completed) return false;
    if (filter === "completed" && !task.completed) return false;

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchesTitle = task.name.toLowerCase().includes(query);
      const matchesDescription = task.description?.toLowerCase().includes(query);
      const matchesCategory = task.category?.toLowerCase().includes(query);

      if (!matchesTitle && !matchesDescription && !matchesCategory) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className={`min-h-[100dvh] transition-colors duration-300 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'} mx-auto w-full px-1`}>
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        <TaskForm
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          taskList={taskList}
          setTaskList={setTaskList}
          darkMode={darkMode}
        />

        <TaskList
          taskList={filteredTasks}
          allTasksCount={taskList.length}
          filter={filter}
          setFilter={setFilter}
          onToggle={toggleTask}
          onDelete={deleteTask}
          darkMode={darkMode}
        />
      </main>
    </div>
  )
}

export default App
