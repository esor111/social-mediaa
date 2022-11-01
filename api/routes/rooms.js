import express from "express";
import { updateAvilability,createRoom, deleteRoom, updateRoom, getHotelRooms, getProom, getHotelman } from "../controllers/room.js";
import { verifytokenAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifytokenAdmin, updateRoom)
router.put("/updateAvilability/:id", updateAvilability)

router.delete("/:id/:hotelid", verifytokenAdmin, deleteRoom)

router.post("/:hotelid", verifytokenAdmin, createRoom);

router.get("/", getHotelRooms);

router.get("/:id", getProom)

router.get("/find/:id", getHotelman)

export default router










// import express from "express";
// import {
//   createRoom,
//   deleteRoom,
//   getRoom,
//   getRooms,
//   updateRoom,
//   updateRoomAvailability,
// } from "../controllers/room.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

// const router = express.Router();
// //CREATE
// router.post("/:hotelid", verifyAdmin, createRoom);

// //UPDATE
// router.put("/availability/:id", updateRoomAvailability);
// router.put("/:id", verifyAdmin, updateRoom);
// //DELETE
// router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// //GET

// router.get("/:id", getRoom);
// //GET ALL

// router.get("/", getRooms);

// export default router;
