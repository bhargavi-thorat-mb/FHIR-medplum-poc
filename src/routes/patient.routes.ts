import { Router } from "express";
import { createPatientController } from "../controllers/patient.controller";

const router = Router();
console.log("Patient routes loaded");
router.post("/", createPatientController);

export default router;