import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patient.routes";
import practitionerRoutes from "./routes/practitioner.routes";
import documentReferenceRoutes from "./routes/documentReference.routes";
import locationRoutes from "./routes/location.routes";
import appointmentRoutes from "./routes/appointment.routes";
import encounterRoutes from "./routes/encounter.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/patients", patientRoutes);
app.use("/practitioners", practitionerRoutes);
app.use("/document-references", documentReferenceRoutes);
app.use("/locations", locationRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/encounters", encounterRoutes);


export default app;