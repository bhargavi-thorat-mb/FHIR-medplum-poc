import app from "./app";
import { initializeMedplum } from "./config/medplum";

async function start() {
  await initializeMedplum();

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

start();
