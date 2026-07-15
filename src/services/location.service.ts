import { Location } from "@medplum/fhirtypes";
import { medplum } from "../config/medplum";

interface CreateLocationInput {
  name: string;
  status: "active" | "inactive" | "suspended";
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export async function createLocation(
  data: CreateLocationInput
) {
  const location: Location = {
    resourceType: "Location",

    name: data.name,

    status: data.status,

    address: {
      line: [data.addressLine],
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      country: data.country,
    },
  };

  return await medplum.createResource(location);
}