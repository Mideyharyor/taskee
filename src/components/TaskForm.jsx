import React from "react";
import { useState } from "react";
import { Plus, X } from "lucide-react";

function TaskForm({ taskTitle, setTaskTitle, taskList, setTaskList, darkMode }) {

    const [taskDescription, setTaskDescription] = useState("");
    const [addTaskOn, setAddTaskOn] = useState(false);
    const [category, setCategory] = useState("Personal");
    const categories = ["Work", "Personal", "Shopping", "Urgent"];

    const addTask = () => {
        const newTask = {
            id: taskList.length + 1,
            name: taskTitle,
            description: taskDescription,
            category: category,
            completed: false,
            activity: "Active"
        }

        setTaskList(prev => [...prev, newTask])
        setTaskTitle("");
        setTaskDescription("");
        setAddTaskOn(false);
        setCategory("Personal");
    }

    const cancelTask = () => {
        setAddTaskOn(false)
        setTaskTitle("");
        setTaskDescription("");
        setCategory("Personal");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    if (!addTaskOn) {
        return (
            <button className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm sm:text-base font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]" onClick={() => setAddTaskOn(true)}>
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" /> Add New Task
            </button>
        );
    }


    return (
        <div className={`mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-2xl transition-colors duration-300 ${darkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-gray-200'
            }`}>
            <div className="flex items-center justify-between mb-4">
                <h2 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Create New Task</h2>
                <button className={`transition-colors ${darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-400 hover:text-gray-600'}`} onClick={cancelTask}><X className="w-5 h-5" /></button>
            </div>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Task Title</label>
                    <input autoFocus type="text" value={taskTitle} name={taskTitle} className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-transparent rounded-lg sm:rounded-xl outline-none transition-all focus:border-indigo-500/50 ${darkMode
                        ? 'bg-slate-800 text-white focus:bg-slate-700'
                        : 'bg-gray-100 text-gray-900 focus:bg-gray-50'
                        }`} placeholder="e.g., Finalizing portfolio design" onChange={(e) => setTaskTitle(e.target.value)} />
                </div>

                <div>
                    <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Task Description</label>
                    <textarea type="text" rows={2} value={taskDescription} name={taskDescription} className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-transparent rounded-lg sm:rounded-xl outline-none transition-all resize-none focus:border-indigo-500/50 ${darkMode
                        ? 'bg-slate-800 text-white focus:bg-slate-700'
                        : 'bg-gray-100 text-gray-900 focus:bg-gray-50'
                        }`} placeholder="What needs to be done?" onChange={(e) => setTaskDescription(e.target.value)} />
                </div>

                <div>
                    <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 border-transparent outline-none cursor-pointer transition-all appearance-none focus:border-indigo-500/50 ${darkMode
                        ? 'bg-slate-800 text-white'
                        : 'bg-gray-100 text-gray-900'
                        }`}>
                        {categories.map((cat, key) => (
                            <option key={key} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-2 sm:gap-3 pt-2">
                    <button type="button" className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-colors ${darkMode
                        ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`} onClick={cancelTask}>Cancel</button>
                    <button
                        type="submit"
                        disabled={!taskTitle.trim()}
                        className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold text-white transition-all ${!taskTitle.trim()
                                ? 'bg-indigo-400/50 cursor-not-allowed opacity-50'
                                : 'bg-[#4f46e5] hover:bg-[#4338ca] shadow-md shadow-indigo-500/10'
                            }`}
                        onClick={addTask}
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm;