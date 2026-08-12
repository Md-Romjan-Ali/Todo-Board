import React from 'react';
import { FaCalendarAlt, FaClock, FaExclamationCircle } from 'react-icons/fa';

const DisplayTask = ({ task, statusStyle, priorityStyle }) => {
    return (
        <div>
            <div

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
        </div>
    );
};

export default DisplayTask;