'use client';

import React from 'react';
import Link from 'next/link';
import { FaPlus, FaTasks, FaCheckCircle, FaStar } from 'react-icons/fa';
import { AddTaskModal } from './AddTaskModal';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Background Decorative Blur Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
                    <FaStar className="w-3 h-3 text-amber-400" />
                    <span>Simplified Task Management</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
                    Manage your tasks with{' '}
                    <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        Todo-Board
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Keep track of your daily workflow, organize your priorities, and complete your tasks faster with a modern glass interface.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <AddTaskModal />

                    <Link
                        href="/all-task"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-white/10 border border-white/20 backdrop-blur-md rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <FaTasks className="w-3.5 h-3.5 text-indigo-500" />
                        <span>View All Tasks</span>
                    </Link>
                </div>

                {/* Quick Feature Pills */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-500 w-4 h-4" />
                        <span>Fast & Clean UI</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-500 w-4 h-4" />
                        <span>Responsive Layout</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-500 w-4 h-4" />
                        <span>Glassmorphic Design</span>
                    </div>
                </div>

            </div>
        </section>
    );
}