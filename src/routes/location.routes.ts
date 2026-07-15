import { Router } from "express";
import { createLocationController } from "../controllers/location.controller";

const router = Router();

router.post("/", createLocationController);

export default router;