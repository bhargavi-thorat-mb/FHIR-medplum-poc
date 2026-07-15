// routes/documentReference.routes.ts
import { Router } from "express";
import { fetchDocumentReferences } from "../controllers/documentReference.controller";

const router = Router();

router.get("/", fetchDocumentReferences);

export default router;