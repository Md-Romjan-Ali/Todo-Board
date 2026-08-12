
import Link from 'next/link';
import React from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';

const Logo = () => {
    return (
        <div>
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
                <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
                    <LuLayoutDashboard className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                    todo<span className="text-indigo-600 dark:text-indigo-400">-board</span>
                </span>
            </Link>
        </div>
    );
};

export default Logo;