import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // Should include user ID or other identifying information
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
