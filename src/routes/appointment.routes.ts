import { Router } from "express";
import { createAppointmentController } from "../controllers/appointment.controller";

const router = Router();

router.post("/", createAppointmentController);

export default router;
