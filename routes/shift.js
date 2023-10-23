import express from "express";


import { getShifts, createShifts , deleteShift} from "../controllers/shift.js";

const router = express.Router();

router.get("/", getShifts);
router.post("/", createShifts);
router.delete("/:id",deleteShift);



export default router;