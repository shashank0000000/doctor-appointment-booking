import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized, Login Again" });
    }

    const token = authHeader.split(" ")[1]; // Extract token

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // decoded should contain { id: user._id } from your login/register
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error);
    res.status(401).json({ success: false, message: "Token invalid or expired" });
  }
};

export default authUser;
