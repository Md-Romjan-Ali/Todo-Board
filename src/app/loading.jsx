'use client';

import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';

export default function Loading() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Background Glow Blobs */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Glass Card Container */}
            <div className="relative z-10 p-8 md:p-10 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-5 text-center max-w-sm mx-auto">

                {/* Animated Brand Icon Wrapper */}
                <div className="relative flex items-center justify-center">
                    {/* Pulsing Outer Ring */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 blur-md opacity-50 animate-pulse" />

                    {/* Main App Icon */}
                    <div className="relative p-4 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30">
                        <LuLayoutDashboard className="w-8 h-8 animate-bounce" />
                    </div>
                </div>

                {/* Text Details */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Todo<span className="text-indigo-600 dark:text-indigo-400">-Board</span>
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Loading your tasks...
                    </p>
                </div>

                {/* Spinner Indicator */}
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mt-2">
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    <span className="text-xs">Preparing dashboard</span>
                </div>

            </div>
        </div>
    );
}