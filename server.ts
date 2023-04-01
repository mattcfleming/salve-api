import express from "express";
import csv from "csv-parser";
import fs from "fs";
import { Clinic, Patient } from "./types";

const clinics: Clinic[] = [];
const patients: Patient[] = [];

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

app.get("/api/clinics", (_, res) => {
  res.json(clinics);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
