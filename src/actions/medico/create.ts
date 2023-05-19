import { Request, Response } from "express";
import { add } from "../../services/medico";

export default async (request: Request, response: Response) => {
    const { nomeMedico, especialidade } = request.body;

    const newMedico = await add(nomeMedico, especialidade);

    return response.json(newMedico);
}