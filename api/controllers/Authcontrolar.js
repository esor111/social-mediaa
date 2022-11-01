import jwt from 'jsonwebtoken';
export const verifytoken = (req, res, next) => {
  try {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split (' ')[1];
      if (!token) {
        res.status (403).json ('token doesnt exist');
      } else {
        jwt.verify (token, process.env.JWT, (err, user) => {
          if (err) {
            res.status (403).json ('token is not valid');
          } else {
            req.user = user;
            next ();
          }
        });
      }
    } else {
      res.status (403).json ('You are not authenticated');
    }
  } catch (err) {
    res.status (500).json (err);
  }
};

export const verifyUser = (req, res, next) => {
  try {
    verifytoken (req, res, () => {
      if (req.user.id == req.params.id) {
        next ();
      } else {
        res.status (500).json ('You are not the right user');
      }
    });
  } catch (err) {
    res.status (500).json (err);
  }
};

export const verfyTokenAdmin = (req, res, next) => {
  try {
    verifytoken (req, res, () => {
      if (req.user.isAdmin) {
        next ();
      } else {
        res.status (500).json ('You are not an admin');
      }
    });
  } catch (err) {
    res.status (500).json (err);
  }
};
