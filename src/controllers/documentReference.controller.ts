// controllers/documentReference.controller.ts
import { Request, Response } from "express";
import { getDocumentReferencesByPatient } from "../services/documentReference.service";

export async function fetchDocumentReferences(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { patientId, startDate, endDate } = req.query;

    if (!patientId) {
      res.status(400).json({ message: "patientId is required" });
      return;
    }

    const documentReferences = await getDocumentReferencesByPatient(
      patientId as string,
      startDate as string | undefined,
      endDate as string | undefined
    );

    res.status(200).json(documentReferences);
  } catch (error: any) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      message: "Unable to fetch document references",
      error: error.response?.data || error.message,
    });
  }
}