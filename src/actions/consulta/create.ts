import { Request, Response } from "express";
import { add } from "../../services/consulta";

export default async (request: Request, response: Response) => {
    const { data, hora, sala, obs, pacienteId,medicoId } = request.body;

    const newConsulta = await add(data, hora, sala, obs, pacienteId, medicoId);

    return response.json(newConsulta);
}