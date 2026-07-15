import { Request, Response } from "express";
import { createAppointment } from "../services/appointment.service";

export async function createAppointmentController(
  req: Request,
  res: Response
) {
  try {
    const appointment = await createAppointment(req.body);

    return res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create appointment",
    });
  }
}