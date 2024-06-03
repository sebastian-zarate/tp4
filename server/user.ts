'use server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getContador() {
  try {
    const result = await prisma.user.findUnique({
      where: { id: '665dceb4933fa6fa91084095' },
      select: { contador: true },
    });
    return result;
  } catch (error) {
    console.error("Error getting counter:", error);
    throw error;
  }
}

export async function updateContador(newContador: number) {
  try {
    const result = await prisma.user.update({
      where: { id: '665dceb4933fa6fa91084095' },
      data: { contador: newContador },
    });
    return result;
  } catch (error) {
    console.error("Error updating counter:", error);
    throw error;
  }
}
