"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { Task, TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function create(values: Task) {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  revalidatePath("/");
  await prisma.task.create({
    data: {
      ...values,
      userEmail,
    },
  });
}

export async function CreateToDo(values: Task) {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  revalidatePath("/");
  await prisma.task.create({
    data: {
      ...values,
      userEmail,
      status: TaskStatus.todo,
    },
  });
}