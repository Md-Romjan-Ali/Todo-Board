'use client';

import Link from 'next/link';
import {
    FaArrowRight,
    FaCalendarAlt,
    FaClock,
    FaExclamationCircle,
    FaSpinner,
    FaCheckCircle,
    FaTasks
} from 'react-icons/fa';

// Default initial tasks array if LocalStorage is empty
export default function TasksSection() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || [])

    // Helper for Status Badge Styling
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Done':
                return {
                    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
                    icon: <FaCheckCircle className="w-3 h-3" />
                };
            case 'In Progress':
                return {
                    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
                    icon: <FaSpinner className="w-3 h-3 animate-spin" />
                };
            default:
                return {
                    color: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
                    icon: <FaClock className="w-3 h-3" />
                };
        }
    };

    // Helper for Priority Badge Styling
    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'High':
                return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
            case 'Medium':
                return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
            default:
                return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Recent Tasks
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Overview of your latest task items loaded from local storage
                    </p>
                </div>

                {/* See All Tasks Button */}
                <Link
                    href="/tasks"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white/20 dark:bg-black/30 hover:bg-white/30 dark:hover:bg-black/50 border border-white/20 backdrop-blur-md shadow-sm transition-all hover:scale-105 active:scale-95 w-fit"
                >
                    <span>See All Tasks ({tasks.length})</span>
                    <FaArrowRight className="w-3 h-3 text-indigo-500" />
                </Link>
            </div>

            {/* Empty State */}
            {tasks.length === 0 ? (
                <div className="text-center py-12 p-8 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl">
                    <FaTasks className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No Tasks Found</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Create a new task to see it listed here.</p>
                </div>
            ) : (
                /* Task Cards Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasks.map((task) => {
                        const statusStyle = getStatusBadge(task.status);
                        const priorityStyle = getPriorityBadge(task.priority);

                        return (
                            <div
                                key={task.id}
                                className="group relative p-6 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Badges */}
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusStyle.color}`}>
                                            {statusStyle.icon}
                                            <span>{task.status}</span>
                                        </span>

                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border uppercase tracking-wider ${priorityStyle}`}>
                                            <FaExclamationCircle className="w-2.5 h-2.5" />
                                            <span>{task.priority}</span>
                                        </span>
                                    </div>

                                    {/* Task Title */}
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white capitalize group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {task.title}
                                    </h3>

                                    {/* Task Description */}
                                    {task.description && (
                                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                            {task.description}
                                        </p>
                                    )}
                                </div>

                                {/* Footer Meta */}
                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                        <FaCalendarAlt className="w-3.5 h-3.5 text-indigo-500" />
                                        <span>Due: {task.dueDate || 'No Date'}</span>
                                    </div>

                                    <div className="flex items-center gap-1 text-[11px]">
                                        <FaClock className="w-3 h-3" />
                                        <span>{new Date(task.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}