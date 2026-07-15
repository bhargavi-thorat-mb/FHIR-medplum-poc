import { Request, Response } from "express";
import { createPatient } from "../services/patient.service";

export async function createPatientController(
  req: Request,
  res: Response
) {
  try {
    const patient = await createPatient(req.body);

    return res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create patient",
    });
  }
}