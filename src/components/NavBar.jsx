import React from "react";
import { Search, Moon, Sun } from "lucide-react";
import logo from "../assets/taskeelogo.png"

function NavBar({ searchQuery, setSearchQuery, darkMode, setDarkMode }) {
    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode
                ? 'bg-slate-950/80 border-slate-800/50'
                : 'bg-white/80 border-gray-200'
            }`}>
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 gap-3 sm:gap-4">
                    <div className="">
                        <img src={logo} className="h-14 w-14 rounded-full"/>
                    </div>
                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl">
                        <div className="relative">
                            <Search className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-slate-500' : 'text-gray-400'
                                }`} />
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent ${darkMode
                                        ? 'bg-slate-900/50 border border-slate-800/50 text-slate-200 placeholder-slate-500'
                                        : 'bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl border transition-all ${darkMode
                                ? 'bg-slate-900/50 border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                : 'bg-gray-100 border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                            }`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                            <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;