import jwt, { SignOptions, Secret, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET: Secret = process.env.JWT_SECRET || "your-very-strong-secret-key";
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || "1h";
type StringValue = `${number}${"s" | "m" | "h" | "d"}`;

export const generateToken = (payload: object, options?: SignOptions): string => {
  const defaultOptions: SignOptions = { expiresIn: JWT_EXPIRES_IN as StringValue };
  return jwt.sign(payload, JWT_SECRET, { ...defaultOptions, ...options });
};

export const verifyToken = (token: string): JwtPayload | string => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    // In a real app, you might want to throw a custom error or handle different JWT errors specifically
    console.error("Invalid token:", error);
    throw new Error("Invalid or expired token");
  }
};

