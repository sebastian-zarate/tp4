'use server'
import { PrismaClient } from "@prisma/client"
import { Result } from "postcss";
const prisma = new PrismaClient();

export async function updateContador( newContador:number) {
    try {
      // Lógica para guardar/actualizar el contador en la base de datos
      const result = await prisma.user.update({
        where: { id: '665dac1695b32fb74c58df7e' },
        data: {
          contador: newContador
        },
      });
      return result;
    } catch (error) {
      console.error("Error updating counter:", error);
      throw error;
    }
  }
 export async function getContador() {
    try {
        // Lógica para obtener el contador desde la base de datos
        const result = await prisma.user.findUnique({
            where: { id: '665dac1695b32fb74c58df7e' },
            select: {
                contador: true
            }
        });
        
        return result;
    } catch (error) {
        console.error("Error getting counter:", error);
        throw error;
    }
  
}

  
  module.exports = { updateContador };
