import { PrismaClient, Medico } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () => prisma.medico.findMany({
    where: {
        deleted: false,
    },
        include: {
      consulta:{ select: { data: true, hora:true, sala:true } }
  }
});

const detail = (id:string) => prisma.medico.findFirst({
    where: {
        id,
        deleted: false,
    },
    include: {
      consulta:{ select: { data: true, hora:true, sala:true, pacienteId:true } }
  }
})



const add = (
  nomeMedico: string,especialidade:string,
) =>
  prisma.medico.create({
    data: {
      nomeMedico,
      especialidade,
    },
  });

  

const update = (id: string, medico: Medico) => 
prisma.medico.update({
    where: { id }, 
    data: medico, 
  });


const remove = (id: string) => 
    prisma.medico.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export {
    all, detail, add, update, remove
}
