import { Request, Response } from "express";
import { detail } from "../../services/paciente";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const paciente = await detail(String(id));

    if (!paciente) {
        return response.status(404).json({
            code: 404,
            message: "Paciente not found"
        });
    }

    return response.json(paciente);
}