import { PrismaClient, Paciente } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () => prisma.paciente.findMany({
    where: {
        deleted: false,
    },
     include: {
      consulta:{ select: { data: true, hora:true } }
  }
});

const detail = (id:string) => prisma.paciente.findFirst({
    where: {
        id,
        deleted: false,
    },
     include: {
      consulta:{ select: { data: true, hora:true, medicoId:true,} },
  }
    
})

const add = (
  nome: string,
  idade: number,
  genero: string,
  morada: string,
  contacto: number,
) =>
  prisma.paciente.create({
    data: {
      nome,
      idade,
      genero,
      morada,
      contacto,
    },
  });


const update = (id: string, paciente: Paciente) => 
prisma.paciente.update({
    where: { id }, 
    data: paciente, 
  });

const remove = (id: string) => 
    prisma.paciente.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export {
    all, detail, add, update, remove
}
