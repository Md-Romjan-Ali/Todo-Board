'use server'
import { revalidatePath } from "next/cache"

export const revalidatepath = async (path) => {
    revalidatePath(path)
}