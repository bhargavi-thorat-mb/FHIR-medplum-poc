import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let accessToken: string | null = null;

export async function getAccessToken(): Promise<string> {
  if (accessToken) {
    return accessToken;
  }

  try {
    const response = await axios.post(
      `${process.env.MEDPLUM_BASE_URL}/oauth2/token`,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.MEDPLUM_CLIENT_ID!,
        client_secret: process.env.MEDPLUM_CLIENT_SECRET!,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const token = response.data.access_token;

    accessToken = token;

    console.log("Access Token Generated");

    return token;
  } catch (error: any) {
    console.error("OAuth Error:");
    console.error(error.response?.data);

    throw error;
  }
}
