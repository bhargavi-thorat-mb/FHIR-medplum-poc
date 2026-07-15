import { Request, Response } from "express";
import { createEncounter } from "../services/encounter.service";

export async function createEncounterController(
  req: Request,
  res: Response
) {
  try {
    const encounter = await createEncounter(req.body);

    return res.status(201).json({
      success: true,
      data: encounter,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create encounter",
    });
  }
}