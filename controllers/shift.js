import ShiftModel from "../models/shift.js"
import mongoose from "mongoose";


export const getShifts = async(req,res) => {
  try {
    const postShifts = await ShiftModel.find();

    res.status(200).json(postShifts);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}


export const createShifts = async(req, res) => {
const shift = req.body;

const newShift = new ShiftModel({
  ...shift
})
try {
  await newShift.save();

  res.status(201).json(newShift);
} catch (error) {
  res.status(409).json(error);
  
}
}

export const deleteShift = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No shift with that id");

  await ShiftModel.findByIdAndRemove(id);

  res.json({ message: "Shift deleted successfully" });
};
