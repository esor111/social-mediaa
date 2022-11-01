import User from "../models/User";
import express from "express"
const router=express.Router()

router.get("/", async(req, res) => {
    try {
        const allData = await User.find();
        res.status(200).json(allData);
    } catch (err) {
        next(err);
    }
})

export default router;