import { Appointment } from "@medplum/fhirtypes";
import { medplum } from "../config/medplum";

interface CreateAppointmentInput {
  patientId: string;
  practitionerId: string;
  locationId: string;
  start: string;
  end: string;
}

export async function createAppointment(
  data: CreateAppointmentInput
) {
  const appointment: Appointment = {
    resourceType: "Appointment",

    status: "booked",

    start: data.start,

    end: data.end,

    participant: [
      {
        actor: {
          reference: `Patient/${data.patientId}`,
        },
        status: "accepted",
      },
      {
        actor: {
          reference: `Practitioner/${data.practitionerId}`,
        },
        status: "accepted",
      },
      {
        actor: {
          reference: `Location/${data.locationId}`,
        },
        status: "accepted",
      },
    ],
  };

  return await medplum.createResource(appointment);
}