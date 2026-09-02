import { Request, Response, Router } from "express";
import { Patient } from "../models/patient.model";

const router = Router();

// GET: Fetch all patients
// router.get('/', async (req: Request, res: Response) => {
//     try {
//         const patients = await Patient.find();
//         res.status(200).json(patients);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch patients' });
//     }
// });


router.get('/', async (req: Request, res: Response) => {

    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch patients" })

    }



})


// POST: Add a new patient record
// router.post('/', async (req: Request, res: Response) => {
//     try {
//         const newPatient = new Patient(req.body);
//         const savedPatient = await newPatient.save();
//         res.status(201).json(savedPatient);
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to create patient record' });
//     }
// });

export default router;