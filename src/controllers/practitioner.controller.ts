import { Request, Response } from "express";
import { createPractitioner } from "../services/practitioner.service";

export async function createPractitionerController(
  req: Request,
  res: Response
) {
  try {
    const practitioner = await createPractitioner(req.body);

    return res.status(201).json({
      success: true,
      data: practitioner,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create practitioner",
    });
  }
}