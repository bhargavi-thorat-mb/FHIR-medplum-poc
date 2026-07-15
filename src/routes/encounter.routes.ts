import { Router } from "express";
import { createEncounterController } from "../controllers/encounter.controller";

const router = Router();

router.post("/", createEncounterController);

export default router;