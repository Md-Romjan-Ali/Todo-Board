"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

export function UpdateAndDeleteButton({ id }) {
    const deleteTask = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        const newTasks = tasks.filter(
            task => task.id !== id
        );

        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };
    return (
        <Dropdown>
            <Button aria-label="Menu" variant="ghost">
                <BsThreeDotsVertical size={25} />
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>

                    <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Label>Edit file</Label>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={deleteTask} variant="danger">
                        <Label>Delete file</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}