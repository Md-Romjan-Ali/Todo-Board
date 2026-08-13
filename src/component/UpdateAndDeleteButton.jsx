"use client";

import { UpdateModal } from "./UpdateModal";
import { DeleteModal } from "./DeleteModal";

export function UpdateAndDeleteButton({ id }) {


    return (
        <>
            <div className="flex justify-between items-center">
                <UpdateModal id={id} />
                <DeleteModal id={id}
                />
            </div>

        </>

    );
}