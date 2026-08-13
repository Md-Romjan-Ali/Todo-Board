'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaExclamationTriangle, FaSearch } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors px-4">
            {/* Ambient Glow Gradients */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Glass Card Container */}
            <div className="relative z-10 p-8 md:p-12 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-6 text-center max-w-lg mx-auto">

                {/* Animated Badge & Icon */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 blur-md opacity-40 animate-pulse" />
                    <div className="relative p-5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30">
                        <FaExclamationTriangle className="w-10 h-10" />
                    </div>
                </div>

                {/* 404 Heading & Description */}
                <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Error 404
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Task Not Found
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto leading-relaxed mt-1">
                        The page or task item you are looking for doesn't exist or has been moved to another board.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-2">
                    <Link
                        href="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <FaHome className="w-3.5 h-3.5" />
                        <span>Back to Home</span>
                    </Link>

                    <Link
                        href="/tasks"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-white/10 border border-white/20 backdrop-blur-md rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <FaSearch className="w-3.5 h-3.5 text-indigo-500" />
                        <span>View All Tasks</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}