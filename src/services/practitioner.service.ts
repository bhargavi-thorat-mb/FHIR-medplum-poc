import { Practitioner } from "@medplum/fhirtypes";
import { medplum } from "../config/medplum";

interface CreatePractitionerInput {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other" | "unknown";
  phone: string;
  email: string;
}

export async function createPractitioner(
  data: CreatePractitionerInput
) {
  const practitioner: Practitioner = {
    resourceType: "Practitioner",

    name: [
      {
        given: [data.firstName],
        family: data.lastName,
      },
    ],

    gender: data.gender,

    telecom: [
      {
        system: "phone",
        value: data.phone,
        use: "work",
      },
      {
        system: "email",
        value: data.email,
        use: "work",
      },
    ],
  };

  return await medplum.createResource(practitioner);
}