# FHIR Medplum POC

A beginner-friendly learning project to understand the Fast Healthcare Interoperability Resources standard.
The goal of this project is to learn how healthcare data is represented, stored, and connected using FHIR resources.
---

##About this Project
I wanted to understand how FHIR works in real-world healthcare applications.
here i built a backend application that creates and manages core FHIR resources using the Medplum SDK.

This project focuses on understanding:

- FHIR resource structure
- Relationships between healthcare resources
- Medplum SDK
- Resource references
- Healthcare workflows
---

##Tech Stack

- Node.js
- Express.js
- TypeScript
- Medplum
- FHIR R4
- REST APIs
---
# Learning Objectives

The purpose of this project is to learn:
- What FHIR is
- Why FHIR exists
- How Medplum implements FHIR
- How healthcare resources are represented
- How resources are connected using FHIR References
- How real healthcare workflows are modeled
---

# Resources Implemented

## Patient

Created Patient resources using Medplum.
Learned:
- HumanName
- Gender
- Birth Date
- ContactPoint (telecom)
- Patient resource structure
---

## Practitioner

Created healthcare providers.

Learned:

- Practitioner resource
- Contact information
- Multiple telecom values
- Practitioner references

---

## Location

Created healthcare facility locations.

Learned:

- Address datatype
- Location status
- Healthcare facility representation

---

## Appointment

Created appointments between:

- Patient
- Practitioner
- Location

Learned:

- Reference datatype
- Participant
- Actor
- Appointment lifecycle
- Resource relationships

---

## Encounter

Created clinical encounters.

Learned:

- Subject
- Participant
- Period
- Encounter class
- Difference between Appointment and Encounter

---

# Healthcare Workflow Learned

```
Patient
    │
Appointment
    │
Encounter
```

Understanding:

- Patient registers
- Appointment is scheduled
- Patient arrives
- Encounter starts
- Clinical information is recorded

---
# Project Structure

```
src
│
├── config
│     └── medplum.ts
│
├── controllers
│
├── routes
│
├── services
│
├── app.ts
│
└── server.ts
```
---

# API Endpoints

| Method | Endpoint     |
|---------|----------   |
| POST | /patients      |
| POST | /practitioners |
| POST | /locations     |
| POST | /appointments  |
| POST | /encounters    |

---

# What I Learned

Through this project I learned:

- Building a backend with Medplum
- Understanding FHIR resource structures
- Creating interoperable healthcare resources
- Connecting resources using FHIR References
- Understanding the difference between Appointment and Encounter
- Modeling healthcare workflows using the FHIR standard

---

# Acknowledgement

This project is part of my journey to learn healthcare interoperability and the FHIR standard using Medplum. The focus is on understanding the concepts step by step and gradually building a production-ready understanding of FHIR.
