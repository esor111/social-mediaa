/** @format */

import jwt from "jsonwebtoken"

export const verfifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};



export const verifytokenandauth = (req, res, next) => {
  verfifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};


export const verifytokenAdmin = (req, res, next) => {
  verfifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};





// import jwt from "jsonwebtoken";
// import { createError } from "../utils/error.js";

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return next(createError(401, "You are not authenticated!"));
//   }

//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     next();
//   });
// };

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };
