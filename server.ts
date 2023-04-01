import express from "express";
import csv from "csv-parser";
import fs from "fs";
import cors from "cors";
import { Clinic, Patient } from "./types";

const clinics: Clinic[] = [];
const patients: Patient[] = [];
const allowedOrigins: string[] = [
  "http://localhost:3000",
  "http://localhost:3001",
];

const app = express();

fs.createReadStream("data/clinics.csv")
  .pipe(csv())
  .on("data", (data) => {
    const clinic: Clinic = {
      id: parseInt(data.id),
      name: data.name,
    };
    clinics.push(clinic);
  })
  .on("end", () => {
    console.log("Clinics loaded");
  })
  .on("error", (err) => {
    console.log(err);
  });

fs.createReadStream("data/patients-1.csv")
  .pipe(csv())
  .on("data", (data) => {
    const patient: Patient = {
      id: parseInt(data.id),
      clinic_id: parseInt(data.clinic_id),
      first_name: data.first_name,
      last_name: data.last_name,
      date_of_birth: data.date_of_birth,
    };
    patients.push(patient);
  })
  .on("end", () => {
    console.log("Patients 1 loaded");
  })
  .on("error", (err) => {
    console.log(err);
  });

fs.createReadStream("data/patients-2.csv")
  .pipe(csv())
  .on("data", (data) => {
    const patient: Patient = {
      id: parseInt(data.id),
      clinic_id: parseInt(data.clinic_id),
      first_name: data.first_name,
      last_name: data.last_name,
      date_of_birth: data.date_of_birth,
    };
    patients.push(patient);
  })
  .on("end", () => {
    console.log("Patients 2 loaded");
  })
  .on("error", (err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.get("/api/clinics", (_, res) => {
  res.json(clinics);
});

app.get("/api/patients/:clinic_id", (req, res) => {
  const { clinic_id } = req.params;
  const clinicPatients = patients.filter(
    (patient) => patient.clinic_id.toString() === clinic_id
  );
  res.json(clinicPatients);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
