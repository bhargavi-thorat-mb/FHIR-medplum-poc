import { Encounter } from "@medplum/fhirtypes";
import { medplum } from "../config/medplum";

interface CreateEncounterInput {
  patientId: string;
  practitionerId: string;
  appointmentId: string;
  locationId: string;
  start: string;
  end: string;
}

export async function createEncounter(data: CreateEncounterInput) {
  const encounter: Encounter = {
    resourceType: "Encounter",

    status: "finished",

    class: {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "AMB",
      display: "ambulatory",
    },

    subject: {
      reference: `Patient/${data.patientId}`,
    },

    appointment: [
      {
        reference: `Appointment/${data.appointmentId}`,
      },
    ],

    participant: [
      {
        individual: {
          reference: `Practitioner/${data.practitionerId}`,
        },
      },
    ],

    location: [
      {
        location: {
          reference: `Location/${data.locationId}`,
        },
      },
    ],

    period: {
      start: data.start,
      end: data.end,
    },
  };

  return await medplum.createResource(encounter);
}