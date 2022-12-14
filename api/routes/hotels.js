import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHRoom, getPhotel, updateHotel } from "../controllers/hotel.js";

const router = express.Router();


router.post("/", createHotel)


router.put("/:id", updateHotel)


router.delete("/:id", deleteHotel)

//GET HOTELS

router.get("/", getAllHotel)

router.get("/find/:id", getPhotel)


router.get("/countBycity", countByCity)

router.get("/countType", countByType)

router.get("/:id", getHRoom);

export default router;



















// import express from "express";
// import {
//   countByCity,
//   countByType,
//   createHotel,
//   deleteHotel,
//   getHotel,
//   getHotelRooms,
//   getHotels,
//   updateHotel,
// } from "../controllers/hotel.js";
// import Hotel from "../models/Hotel.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
// const router = express.Router();

// //CREATE
// router.post("/", verifyAdmin, createHotel);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

// export default router;
