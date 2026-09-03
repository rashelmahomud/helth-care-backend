import { Router } from "express";
import { getAllDoctors } from "../controllers/doctor.controller";

const router = Router();

//GET: Fetch All Patients Data
router.get('/', getAllDoctors);


export default router;



