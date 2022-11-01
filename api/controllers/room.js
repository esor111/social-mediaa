import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const saveRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } });
    } catch (err) {
      res.status(500).json(err)
    }
    res.status(200).json(saveRoom);
  } catch (err) {
    res.status(500).json(err)
  }
}





export const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);

  }
}


export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);

    try {
      await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
    } catch (err) {
      res.status(500).json(err);

    }
    res.status(200).json("Room has been deleted")
  } catch (err) {
    res.status(500).json(err);

  }
}


export const getHotelman = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};



export const getHotelRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms)
  } catch (err) {
    res.status(500).json(err);

  }
}

export const getProom = async (req, res) => {
  try {
    const rooms = await Room.findById(req.params.id);
    if (!rooms) {
      res.status(500).json("Room doenst found");
    } else {
      res.status(200).json(rooms)

    }
  } catch (err) {
    res.status(200).json(err)

  }
}



export const updateAvilability = async (req, res) => {

  try {
    const updateRomm = await Room.updateOne({ "roomNumbers._id": req.params.id },
      { $push: { "roomNumbers.$.unavailableDates": req.body.dates }, })
    res.status(200).json("room has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
}













// import Room from "../models/Room.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";

// export const createRoom = async (req, res, next) => {
//   const hotelId = req.params.hotelid;
//   const newRoom = new Room(req.body);

//   try {
//     const savedRoom = await newRoom.save();
//     try {
//       await Hotel.findByIdAndUpdate(hotelId, {
//         $push: { rooms: savedRoom._id },
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json(savedRoom);
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateRoom = async (req, res, next) => {
//   try {
//     const updatedRoom = await Room.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedRoom);
//   } catch (err) {
//     next(err);
//   }
// };
// export const updateRoomAvailability = async (req, res, next) => {
//   try {
//     await Room.updateOne(
//       { "roomNumbers._id": req.params.id },
//       {
//         $push: {
//           "roomNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Room status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const deleteRoom = async (req, res, next) => {
//   const hotelId = req.params.hotelid;
//   try {
//     await Room.findByIdAndDelete(req.params.id);
//     try {
//       await Hotel.findByIdAndUpdate(hotelId, {
//         $pull: { rooms: req.params.id },
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json("Room has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const getRoom = async (req, res, next) => {
//   try {
//     const room = await Room.findById(req.params.id);
//     res.status(200).json(room);
//   } catch (err) {
//     next(err);
//   }
// };
// export const getRooms = async (req, res, next) => {
//   try {
//     const rooms = await Room.find();
//     res.status(200).json(rooms);
//   } catch (err) {
//     next(err);
//   }
// };
