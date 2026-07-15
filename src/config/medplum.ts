import WebSocket from "ws";
(global as any).WebSocket = WebSocket;

import { MedplumClient } from "@medplum/core";
import dotenv from "dotenv";

dotenv.config();

export const medplum = new MedplumClient({
  baseUrl: process.env.MEDPLUM_BASE_URL,
});

export async function initializeMedplum() {
  await medplum.startClientLogin(
    process.env.MEDPLUM_CLIENT_ID!,
    process.env.MEDPLUM_CLIENT_SECRET!
  );

  console.log("✅ Connected to Medplum");
}