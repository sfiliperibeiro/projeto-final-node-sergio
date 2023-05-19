import express, {Request, Response} from "express";
import consultaRoutes from "./consulta";
import pacienteRoutes from "./paciente";
import medicoRoutes from "./medico";
import { name, version } from "../../package.json";
import authRoutes from "./auth";


const router = express.Router();

router.get("/", (req: Request, res: Response) =>
    res.json({
        name,
        version,
    })
);

router.use("/auth", authRoutes )
router.use("/consulta", consultaRoutes);
router.use("/paciente", pacienteRoutes);
router.use("/medico", medicoRoutes);
export default router;