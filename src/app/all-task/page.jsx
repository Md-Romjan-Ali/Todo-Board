'use client';

import DisplayTask from '@/component/DisplayTask';
import React, { useState, useEffect, useMemo } from 'react';
import {
    FaSearch,
    FaFilter,
    FaClock,
    FaSpinner,
    FaCheckCircle,
    FaTasks,
    FaTimesCircle
} from 'react-icons/fa';

export default function AllTasksSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');

    // Fetch tasks from LocalStorage on mount

    const tasks = JSON.parse(localStorage.getItem('tasks'));

    // Filter tasks dynamically using useMemo based on Search Input and Status Dropdown
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            // Search by Title (case-insensitive)
            const matchesSearch = task.title
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());

            // Filter by Status
            const matchesStatus =
                selectedStatus === 'All' || task.status === selectedStatus;

            return matchesSearch && matchesStatus;
        });
    }, [tasks, searchTerm, selectedStatus]);

    // Status Badge Helper
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

    // Priority Badge Helper
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
        <section className="w-full max-w-7xl mt-15 mx-auto px-4 sm:px-6 md:px-8 py-12">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    All Tasks
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Search, filter, and manage all your tasks in one place
                </p>
            </div>

            {/* Control Bar: Search & Status Filter */}
            <div className="p-4 mb-8 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Search Input */}
                <div className="relative w-full sm:w-80">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search tasks by title..."
                        className="w-full pl-10 pr-10 py-2.5 rounded-full border border-white/20 bg-white/20 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <FaTimesCircle className="w-3.5 h-3.5" />
                        </button>
                    )}
                </div>

                {/* Status Filter Dropdown */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <FaFilter className="w-3.5 h-3.5 text-indigo-500 hidden sm:block" />
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-full sm:w-48 px-4 py-2.5 rounded-full border border-white/20 bg-white/20 dark:bg-black/40 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-all"
                    >
                        <option value="All" className="dark:bg-slate-900">All Statuses</option>
                        <option value="To Do" className="dark:bg-slate-900">To Do</option>
                        <option value="In Progress" className="dark:bg-slate-900">In Progress</option>
                        <option value="Done" className="dark:bg-slate-900">Done</option>
                    </select>
                </div>

            </div>

            {/* Results Count Summary */}
            <div className="mb-4 px-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Showing {filteredTasks.length} of {tasks.length} tasks
            </div>

            {/* Cards Grid / Empty State */}
            {filteredTasks.length === 0 ? (
                <div className="text-center py-16 p-8 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl">
                    <FaTasks className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No Matching Tasks Found</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Try adjusting your search query or changing the status filter.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => {
                        const statusStyle = getStatusBadge(task.status);
                        const priorityStyle = getPriorityBadge(task.priority);

                        return (
                            <DisplayTask key={task.id}
                                statusStyle={statusStyle}
                                priorityStyle={priorityStyle}
                                task={task}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
}