import { Router } from "express";
import { getAgency } from "../controllers/getAgencyController.js";
import { getAllAgency } from "../controllers/getAllAgencyController.js";

const router = Router();

router.post('/agency/get', getAgency);
router.post('/agency/getAll', getAllAgency);

export default router;
