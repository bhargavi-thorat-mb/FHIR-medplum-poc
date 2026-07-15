// services/documentReference.service.ts
import axios from "axios";
import dotenv from "dotenv";
import { getAccessToken } from "./auth.service";

dotenv.config();

function getLast30DaysRange(): { dateFrom: string; dateTo: string } {
  const today = new Date();
  const past = new Date();
  past.setDate(today.getDate() - 30);

  return {
    dateFrom: past.toISOString(),
    dateTo: today.toISOString(),
  };
}

export async function getDocumentReferencesByPatient(
  patientId: string,
  startDate?: string,
  endDate?: string
) {
  const token = await getAccessToken();

  let dateFrom: string;
  let dateTo: string;

  if (startDate && endDate) {
    dateFrom = new Date(startDate).toISOString();
    dateTo = new Date(endDate).toISOString();
  } else {
    const defaultRange = getLast30DaysRange();
    dateFrom = defaultRange.dateFrom;
    dateTo = defaultRange.dateTo;
  }

  const params = new URLSearchParams();
  params.append("patient", `Patient/${patientId}`);
  params.append("date", `ge${dateFrom}`);
  params.append("date", `le${dateTo}`);

  const url = `${process.env.MEDPLUM_BASE_URL}/fhir/R4/DocumentReference?${params.toString()}`;

  console.log("FHIR URL:", url);

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}