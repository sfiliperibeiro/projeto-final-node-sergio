import express from "express";
import { list, detail, create, update, remove } from "../actions/consulta";

const router = express.Router();

router.get("", list);
router.get("/:id", detail);
router.post("", create);
router.delete("/:id", remove);
router.put("/:id", update);

export default router;