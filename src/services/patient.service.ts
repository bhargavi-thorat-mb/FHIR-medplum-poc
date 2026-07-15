import { Patient } from "@medplum/fhirtypes";
import { medplum } from "../config/medplum";

interface CreatePatientInput {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other" | "unknown";
  birthDate: string;
}

export async function createPatient(data: CreatePatientInput) {
  const patient: Patient = {
    resourceType: "Patient",

    name: [
      {
        given: [data.firstName],
        family: data.lastName,
      },
    ],

    gender: data.gender,

    birthDate: data.birthDate,
  };

  const createdPatient = await medplum.createResource(patient);

  return createdPatient;
}