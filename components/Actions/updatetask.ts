"use server";

import prisma from "@/lib/db";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function FetchSingleData(id: string) {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
  revalidatePath("/");
}

export async function EditData(id: string, values: Task) {
  revalidatePath("/");
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      ...values,
    },
  });
}
