import { Request, Response } from "express";
import { createLocation } from "../services/location.service";

export async function createLocationController(
  req: Request,
  res: Response
) {
  try {
    const location = await createLocation(req.body);

    return res.status(201).json({
      success: true,
      data: location,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create location",
    });
  }
}