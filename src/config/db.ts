import mongoose from "mongoose";


export const connectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI || "";

    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};



