import { Router } from "express";
import { deleteDoctorData, getAllDoctors, getSingleDoctor, newDoctorPost, updateDoctorPatch } from "../controllers/doctor.controller";

const router = Router();

//GET: Fetch All Patients Data
router.get('/', getAllDoctors);
router.get('/:id', getSingleDoctor);
router.post('/', newDoctorPost)
router.patch("/:id", updateDoctorPatch)
router.delete('/:id', deleteDoctorData)


export default router;

