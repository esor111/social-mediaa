import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import Rooms from "../models/Room.js"

export const createHotel = async (req, res, next) => {
  const newHote = new Hotel(req.body)
  try {
    const saveHotel = await newHote.save()
    res.status(200).json(saveHotel);
  } catch (err) {
    res.status(500).json(err);
  }
}


export const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);

  }
}



export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted")
  } catch (err) {
    res.status(500).json(err);
  }
}



export const getAllHotel = async (req, res, next) => {
  const { min, max, ...others } = req.query
  try {
    const allData = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 9999 } }).limit(req.query.limit)

    res.status(200).json(allData);
  } catch (err) {
    next(err);
  }
}


export const getPhotel = async (req, res) => {
  try {
    const photel = await Hotel.findById(req.params.id);
    res.status(200).json(photel);
  } catch (err) {
    res.status(500).json(err);
  }
}


export const countByCity = async (req, res) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map((bity) => {
      return Hotel.countDocuments({ city: bity });
    }))
    res.status(200).json(list)
  } catch (err) {
    res.status(500).json(err);

  }
}









export const countByType = async (req, res) => {
  try {
    const hotelsCount = await Hotel.countDocuments({ type: "hotel" })
    const villaCount = await Hotel.countDocuments({ type: "villa" })
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
    const cabincount = await Hotel.countDocuments({ type: "cabin" })
    const resortCCount = await Hotel.countDocuments({ type: "resort" })

    res.status(200).json([
      { type: "hotel", count: hotelsCount },
      { type: "villa", count: villaCount },
      { type: "apartment", count: apartmentCount },
      { type: "cabin", count: cabincount },
      { type: "resort", count: resortCCount },
    ])

  } catch (err) {
    res.status(500).json(err);
  }

}



export const createnewRoom = async (req, res) => {
  const HotelId = req.params.HotelId
  const roomId = req.params.roomId
  try {
    const hotel = await Hotel.findById(HotelId);
    if (hotel) {
      const room = new Room(req.body);
      const saveRoom = await Room.save();
      try {
        const saveinHotel = Hotel.findByIdAndUpdate(HotelId, {
          $push: {Room:saveRoom._id}
        })
        res.json(saveinHotel)
      } catch (err) {

      }
    }

  } catch (err) {

  }
}

export const getHRoom = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Rooms.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    res.status(500).json(err);

  }
};










const createRoom = async () => {
  const hoteId = req.params.hoteId;
  try {
    const hotel = await Hotel.findById(hoteId)
    if (hotel) {
      try {
        const delRom = await Room.findByIdAndDelete(req.params.id)
        await Hotel.findByIdAndUpdate({ $pull: { rooms: req.params.id } })
        res.status(200).json("Romm successfully deleted")
      } catch (err) {

      }
    }
  } catch (err) {
    res.json("sorry");
  }
}

















// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };




// import Hotel from "../models/Hotel.js";
// import Room from "../models/Room.js";

// export const createHotel = async (req, res, next) => {
//   const newHotel = new Hotel(req.body);

//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (err) {
//     next(err);
//   }
// };
// export const updateHotel = async (req, res, next) => {
//   try {
//     const updatedHotel = await Hotel.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedHotel);
//   } catch (err) {
//     next(err);
//   }
// };
// export const deleteHotel = async (req, res, next) => {
//   try {
//     await Hotel.findByIdAndDelete(req.params.id);
//     res.status(200).json("Hotel has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const getHotel = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     res.status(200).json(hotel);
//   } catch (err) {
//     next(err);
//   }
// };
// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const hotels = await Hotel.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByType = async (req, res, next) => {
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getHotelRooms = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };


