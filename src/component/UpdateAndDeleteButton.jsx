"use client";

import { UpdateModal } from "./UpdateModal";
import { DeleteModal } from "./DeleteModal";

export function UpdateAndDeleteButton({ task, id }) {


    return (
        <>
            <div className="flex justify-between items-center">
                <UpdateModal task={task} id={id} />
                <DeleteModal
                    id={id}
                />
            </div>

        </>

    );
}