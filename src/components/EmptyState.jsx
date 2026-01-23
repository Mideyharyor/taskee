import React from "react";
import { Inbox } from "lucide-react";

function EmptyState({ darkMode }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className={`w-20 h-20 rounded-full border flex items-center justify-center mb-6 ${darkMode
                    ? 'bg-slate-900/50 border-slate-800/50'
                    : 'bg-gray-100 border-gray-200'
                }`}>
                <Inbox className={`w-10 h-10 ${darkMode ? 'text-slate-600' : 'text-gray-400'}`} />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>No tasks found</h3>
            <p className={`max-w-md ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                Try changing your filters or add a new task to get started on your productivity journey.
            </p>
        </div>
    )
}

export default EmptyState;
