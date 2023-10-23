import mongoose from "mongoose";

const shiftSchema = mongoose.Schema({
    date: String,
    title: String,
    startTime: String,
    endTime: String,
})

const ShiftModel = mongoose.model("ShiftModel",shiftSchema);

export default ShiftModel;