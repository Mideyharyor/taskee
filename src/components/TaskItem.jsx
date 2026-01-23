import { CheckCircle, Circle, Trash2 } from "lucide-react";
import React from "react";

function TaskItem({ task, onToggle, onDelete, darkMode }) {
    const categoryColors = {
        "Work": "bg-blue-500/10 text-blue-400 border-blue-500/20",
        "Personal": "bg-purple-500/10 text-purple-400 border-purple-500/20",
        "Shopping": "bg-green-500/10 text-green-400 border-green-500/20",
        "Urgent": "bg-red-500/10 text-red-400 border-red-500/20"
    };

    return (
        <div className={`group flex relative items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 mb-3 rounded-xl sm:rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md ${darkMode
                ? 'border-slate-800/50 bg-slate-900/30 hover:bg-slate-900/50 hover:border-slate-700/50'
                : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
            } ${task.completed ? "opacity-60" : ""}`}>
            {/* Completion Toggle */}
            <button
                className="flex-shrink-0 mt-0.5 sm:mt-0 transition-transform active:scale-90 hover:scale-110"
                onClick={() => onToggle(task.id)}
            >
                {task.completed ? (
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 fill-indigo-500/20" />
                ) : (
                    <Circle className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${darkMode
                            ? 'text-slate-600 hover:text-indigo-400'
                            : 'text-gray-300 hover:text-indigo-400'
                        }`} />
                )}
            </button>

            {/* Task Content */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`text-sm sm:text-base font-semibold transition-all duration-300 ${task.completed
                            ? darkMode ? 'text-slate-500 line-through' : 'text-gray-400 line-through'
                            : darkMode ? 'text-slate-200' : 'text-gray-900'
                        }`}>
                        {task.name}
                    </h3>
                    {task.category && (
                        <span className={`px-2 py-0.5 rounded-md text-xs font-semibold border ${categoryColors[task.category] || "bg-slate-500/10 text-slate-400 border-slate-500/20"}`}>
                            {task.category}
                        </span>
                    )}
                </div>

                {task.description && (
                    <p className={`text-xs sm:text-sm line-clamp-2 ${task.completed
                            ? darkMode ? 'text-slate-600' : 'text-gray-400'
                            : darkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                        {task.description}
                    </p>
                )}
            </div>

            {/* Delete Button - Always visible on mobile */}
            <button
                onClick={() => onDelete(task.id)}
                className={`flex-shrink-0 p-1.5 sm:p-2 rounded-lg transition-all sm:opacity-0 sm:group-hover:opacity-100 ${darkMode
                        ? 'text-slate-600 hover:text-red-400 hover:bg-red-500/10'
                        : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                aria-label="Delete task"
            >
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    )
}

export default TaskItem;