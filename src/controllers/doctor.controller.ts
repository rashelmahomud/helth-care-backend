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




// doctor data update patch !
export const updateDoctorPatch = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true })
        if (!updateDoctor) {
            return res.status(400).json({ error: "doctor not found !" })
        }
        res.status(200).json({ message: "Doctor data update successfully (catch)", updateDoctor })


    } catch (error) {

        res.status(500).json({ error: "something is wrong faild to update data !" })

    }

}




