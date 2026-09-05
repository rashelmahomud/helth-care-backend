import { Request, Response } from "express"
import { Doctor } from "../models/doctor.model";


//get all Doctors data
export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).json(doctors)

    } catch (error) {
        res.status(500).json({ error: "Failed to Doctors data" })
    }
}


//get single doctor data

export const getSingleDoctor = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const doctor = await Doctor.findById(id)
        if (!doctor) {
            return res.status(404).json({ error: "Doctor Not found" })
        }
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: "Faild to Fetch doctor data" })

    }

}

