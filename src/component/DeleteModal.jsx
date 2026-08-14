"use client";

import { Button, Modal } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { BiRocket } from "react-icons/bi";

export function DeleteModal({ id }) {
    const pathName = usePathname()
    const router = useRouter()
    const deleteTask = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        const newTasks = tasks.filter(
            item => item.id !== id
        );

        localStorage.setItem("tasks", JSON.stringify(newTasks));
        window.location.reload();

    };
    return (
        <Modal>
            <Button variant="danger-soft">Delete Task</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <BiRocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Are You sure!</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Are you sure you want to `Delete` This Task
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="ghost" className="w-full" slot="close">
                                Cansele
                            </Button>
                            <Button onClick={deleteTask} className="w-full" slot="close">
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}