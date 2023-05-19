import { PrismaClient, Consulta } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () => prisma.consulta.findMany({
  where: {
    deleted: false,
  },
  include: { 
      paciente: { select: { nome: true } }, 
      medico: { select: { nomeMedico: true, especialidade:true } } 
    },
});


const detail = (id:string) => prisma.consulta.findFirst({
    where: {
        id,
        deleted: false,
    },
    include: {
    paciente: true,
    medico: true
  }
})

const add = (data: string, hora: string, sala: string, obs: string, pacienteId: string, medicoId: string) =>
  prisma.consulta.create({
    data: {
      hora: new Date(Date.parse(hora)),
      data: new Date(Date.parse(data)),
      sala,
      obs,
      paciente: {
        connect: { id: pacienteId },
      },
      medico: {
        connect: { id: medicoId },
      },
    },
    include: { 
      paciente: { select: { nome: true } }, 
      medico: { select: { nomeMedico: true, especialidade:true } } 
    },
  });
  

const update = (id: string, consulta: Consulta) => 
prisma.consulta.update({
    where: { id }, 
    data: consulta,
    include: {
    paciente: true,
    medico: true
  } 
  });


const remove = (id: string) => 
    prisma.consulta.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export {
    all, detail, add, update, remove
}
