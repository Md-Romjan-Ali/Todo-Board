'use client';

import React from 'react';
import Link from 'next/link';
import {
    FaLayoutDashboard,
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaDiscord,
    FaPaperPlane,
    FaHeart,
} from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import Logo from './Logo';

export default function Footer() {
    const handleSubscribe = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Newsletter Subscription:', data);
        alert(`Subscribed successfully with ${data.email}!`);
        event.target.reset();
    };

    return (
        <footer className="relative mt-20 border-t border-white/20 bg-white/10 dark:bg-black/40 backdrop-blur-2xl transition-colors duration-300 overflow-hidden">
            {/* Background Ambient Glow Effects */}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">

                    {/* Brand Column (Span 4) */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <Logo />

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                            An elegant, modern task management dashboard designed to simplify your daily workflow with glassmorphism aesthetics.
                        </p>

                        {/* System Status Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>All systems operational</span>
                        </div>
                    </div>

                    {/* Links Column 1: Navigation (Span 2) */}
                    <div className="md:col-span-2 flex flex-col gap-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                            <li>
                                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/tasks" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    All Task
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2: Resources (Span 2) */}
                    <div className="md:col-span-2 flex flex-col gap-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                            <li>
                                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column (Span 4) */}
                    <div className="md:col-span-4 flex flex-col gap-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Stay Updated
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                            Get the latest updates, tips, and feature releases directly to your inbox.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-1 flex items-center gap-2">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-2.5 rounded-full border border-white/20 bg-white/20 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs transition-all"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe to newsletter"
                                className="p-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full shadow-md shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all"
                            >
                                <FaPaperPlane className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Socials & Legal Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <p className="flex items-center gap-1">
                        © {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-slate-300">todo-board</span>. Crafted with <FaHeart className="text-red-500 w-3 h-3 inline" /> for product creators.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110"
                        >
                            <FaGithub className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110"
                        >
                            <FaTwitter className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110"
                        >
                            <FaLinkedin className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://discord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110"
                        >
                            <FaDiscord className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}