import { Router } from "express";
import { getAllDoctors, getSingleDoctor, updateDoctorPatch } from "../controllers/doctor.controller";

const router = Router();

//GET: Fetch All Patients Data
router.get('/', getAllDoctors);
router.get('/:id', getSingleDoctor);
router.patch("/:id", updateDoctorPatch)


export default router;

