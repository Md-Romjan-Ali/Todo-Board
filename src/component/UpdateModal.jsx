"use client";

import { Button, Modal } from "@heroui/react";
import { BiRocket } from "react-icons/bi";

export function UpdateModal({ task, id }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());

        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        const updatedTasks = tasks.map(item =>
            item.id === id
                ? { ...item, ...taskData }
                : item
        );

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        window.location.reload();
    };
    return (
        <Modal>
            <Button variant="secondary">Edit Task</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <BiRocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update your Task</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                {/* Title */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="title" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                                        Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        defaultValue={task?.title}
                                        minLength={3}
                                        required
                                        placeholder="e.g. Design Landing Page"
                                        className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/20 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                                    />
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="description" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                                        Description <span className="text-slate-400 font-normal">(Optional)</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        defaultValue={task?.description}
                                        placeholder="Add extra context or steps..."
                                        className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/20 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
                                    />
                                </div>

                                {/* Priority & Status */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Priority */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="priority" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                                            Priority
                                        </label>
                                        <select
                                            id="priority"
                                            name="priority"
                                            defaultValue={task?.priority}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/20 dark:bg-black/40 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus-visible:ring-indigo-500 transition-all text-sm cursor-pointer"
                                        >
                                            <option value="Low" className="dark:bg-slate-900">Low</option>
                                            <option value="Medium" className="dark:bg-slate-900">Medium</option>
                                            <option value="High" className="dark:bg-slate-900">High</option>
                                        </select>
                                    </div>

                                    {/* Status */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="status" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            name="status"
                                            defaultValue={task?.status}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/20 dark:bg-black/40 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus-visible:ring-indigo-500 transition-all text-sm cursor-pointer"
                                        >
                                            <option value="To Do" className="dark:bg-slate-900">To Do</option>
                                            <option value="In Progress" className="dark:bg-slate-900">In Progress</option>
                                            <option value="Done" className="dark:bg-slate-900">Done</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Due Date */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="dueDate" className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                                        Due Date <span className="text-slate-400 font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="dueDate"
                                        name="dueDate"
                                        defaultValue={task?.dueDate}
                                        className="w-full px-4 py-2.5 rounded-xl border border-white/20 bg-white/20 dark:bg-black/30 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm cursor-pointer"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Modal.Footer>
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button slot="close" type="submit">Save</Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}