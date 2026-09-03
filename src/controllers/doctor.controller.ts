import { Request, Response } from "express"
import { Doctor } from "../models/doctor.model";


export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).json(doctors)

    } catch (error) {
        res.status(500).json({ error: "Failed to Doctors data" })
    }
}


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
