import { Request, Response } from "express";
import { update, detail } from "../../services/consulta";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    
    if (!await detail((id))){
        return response.status(404).json({
            code:404,
            message: "Consulta not found",
        });
    }

    const consulta = await update((id), request.body);

    return response.json(consulta);
}
