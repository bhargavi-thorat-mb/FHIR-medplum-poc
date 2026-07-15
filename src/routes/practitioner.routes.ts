import { Router } from "express";
import { createPractitionerController } from "../controllers/practitioner.controller";

const router = Router();

router.post("/", createPractitionerController);

export default router;