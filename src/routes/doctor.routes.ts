import { Router } from "express";
import { getAllDoctors, getSingleDoctor } from "../controllers/doctor.controller";

const router = Router();

//GET: Fetch All Patients Data
router.get('/', getAllDoctors);
router.get('/:id', getSingleDoctor);


export default router;

