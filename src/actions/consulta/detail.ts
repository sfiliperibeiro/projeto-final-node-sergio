import { Request, Response } from "express";
import { detail } from "../../services/consulta";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const consulta = await detail(String(id));

    if (!consulta) {
        return response.status(404).json({
            code: 404,
            message: "Consulta not found"
        });
    }

    return response.json(consulta);
}