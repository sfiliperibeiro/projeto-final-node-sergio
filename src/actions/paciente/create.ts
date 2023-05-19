import { Request, Response } from "express";
import { add } from "../../services/paciente";

export default async (request: Request, response: Response) => {
    const { nome, idade, genero, morada, contacto } = request.body;

    const newPaciente = await add(nome, idade, genero, morada, contacto);

    return response.json(newPaciente);
}