const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../data/mysecrets")

module.exports = (req, res, next) => {
  const { auth } = req.headers
  if(auth) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if(err){
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        req.decodedToken = decodedToken
        next()
      }

    })
  } else {
    res.status(400).json({ message: "Please provide login credentials"})
  }
};
