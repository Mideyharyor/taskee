import React from "react";
import TaskItem from "./TaskItem";
import EmptyState from "./EmptyState";

function TaskList({ taskList, allTasksCount, filter, setFilter, onToggle, onDelete, onEdit, darkMode }) {
    const filters = [
        { id: "all", label: "All" },
        { id: "active", label: "Active" },
        { id: "completed", label: "Completed" }
    ];

    return (
        <div className="py-4">
            {/* Header - Stack on mobile, side-by-side on larger screens */}
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className={`text-2xl sm:text-4xl font-bold mb-1 ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>Taskee Dashboard</h2>
                    <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                        {taskList.length} {taskList.length === 1 ? 'task' : 'tasks'} found for your current filters.
                    </p>
                </div>

                {/* Filter tabs - full width on mobile */}
                <div className={`flex w-full sm:w-auto p-1.5 rounded-xl border transition-colors ${darkMode
                    ? 'bg-slate-900/50 border-slate-800/50'
                    : 'bg-gray-100 border-gray-200'
                    }`}>
                    {filters.map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${filter === f.id
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                                : darkMode
                                    ? 'text-slate-400 hover:text-slate-300'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </header>

            <div className="mt-4 sm:mt-6">
                {taskList.length === 0 ? (
                    <EmptyState darkMode={darkMode} />
                ) : (
                    taskList.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={onToggle}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            darkMode={darkMode}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default TaskList;
