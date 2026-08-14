'use client';

import React from 'react';

export default function DisplayTaskSkeleton({ count = 3 }) {
    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Top Header Section with Left & Right Text Skeletons */}
            <div className="flex items-center justify-between gap-4 mb-8">
                {/* Left Side: Title & Subtitle */}
                <div className="flex flex-col gap-2">
                    <div className="h-7 w-36 md:w-48 bg-slate-300 dark:bg-slate-700/50 rounded-lg animate-pulse" />
                    <div className="h-4 w-48 md:w-64 bg-slate-200 dark:bg-slate-800 rounded-md animate-pulse" />
                </div>

                {/* Right Side: Action Button or Counter Text */}
                <div className="h-9 w-28 md:w-32 bg-slate-300 dark:bg-slate-700/50 rounded-full animate-pulse" />
            </div>

            {/* Grid Container matching your Task Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-3xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-lg flex flex-col justify-between h-[280px] animate-pulse"
                    >
                        <div>
                            {/* Top Badges (Status & Priority) */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="h-6 w-24 bg-slate-300 dark:bg-slate-700/50 rounded-full" />
                                <div className="h-5 w-16 bg-slate-300 dark:bg-slate-700/50 rounded-full" />
                            </div>

                            {/* Task Title Skeleton */}
                            <div className="h-6 w-3/4 bg-slate-300 dark:bg-slate-700/60 rounded-lg mb-3" />

                            {/* Task Description Skeleton (2 lines) */}
                            <div className="space-y-2 mt-2">
                                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
                                <div className="h-4 w-4/5 bg-slate-200 dark:bg-slate-800 rounded-md" />
                            </div>
                        </div>

                        {/* Footer Area */}
                        <div>
                            {/* Due Date & Creation Time */}
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded-md" />
                                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded-md" />
                            </div>

                            {/* Update & Delete Button Skeleton */}
                            <div className="mt-5 h-9 w-full bg-slate-300 dark:bg-slate-700/50 rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}