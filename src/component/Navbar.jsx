'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BiCheckSquare, BiHome, BiMenu, BiPlus, BiX } from 'react-icons/bi';
import { AddTaskModal } from './AddTaskModal';
import Logo from './Logo';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'All Task', href: '/tasks' },
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Scroll behavior: hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
                setIsMobileMenuOpen(false); // Close mobile menu when scrolling down
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className="fixed mb-10 top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                aria-label="Main Navigation"
                className={`pointer-events-auto w-full max-w-7xl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-24'
                    }`}
            >
                <div className="relative flex items-center justify-between h-16 px-4 md:px-6 rounded-2xl border border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl transition-colors duration-300">

                    {/* Left Side: Logo & Brand Name */}
                    <Logo />

                    {/* Center Side: Navigation Links (Desktop) */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40 font-semibold'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Side: Add Task Button (Desktop) */}
                    <div className="hidden md:block">


                        <AddTaskModal />

                    </div>

                    {/* Mobile Layout */}
                    <div className="flex items-center gap-2 md:hidden">
                        {/* Mobile Add Task Button */}
                        <button
                            type="button"
                            aria-label="Add Task"
                            className="p-2 text-white bg-linear-to-r from-indigo-600 to-purple-600 shadow-md rounded-full hover:scale-105 active:scale-95 transition-all"
                        >
                            <BiPlus className="w-4 h-4" />
                        </button>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            type="button"
                            aria-label="Toggle Navigation Menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <BiX className="w-5 h-5" />
                            ) : (
                                <BiMenu className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Pure React Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-20 right-0 w-48 py-2 rounded-2xl border border-white/20 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl md:hidden flex flex-col gap-1 transition-all">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium ${pathname === '/'
                                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30'
                                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-white/5'
                                    }`}
                            >
                                <BiHome className="w-4 h-4" />
                                <span>Home</span>
                            </Link>
                            <Link
                                href="/tasks"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium ${pathname === '/tasks'
                                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30'
                                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-white/5'
                                    }`}
                            >
                                <BiCheckSquare className="w-4 h-4" />
                                <span>All Task</span>
                            </Link>
                        </div>
                    )}

                </div>
            </nav>
        </div>
    );
}