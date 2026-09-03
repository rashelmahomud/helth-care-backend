import { Schema, Document } from "mongoose";

export interface IDoctor extends Document {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    image: string;
    hospital: string;
    degree: string;
    patients: string;
    email: string;
    phone: string;
    location: string;
    consultationFee: string;
    languages: "English" | "Spanish";
    availability: string;
    about: string;
    education: string[];
    specializations: string[];
    achievements: string[];
    schedule: string[];
}

export const DoctorSchema = new Schema<IDoctor>({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    hospital: { type: String, required: true },
    degree: { type: String, required: true },
    patients: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    consultationFee: { type: String, required: true },
    languages: {
        type: String,
        required: true,
        enum: ["English", "Spanish"]
    },
    availability: { type: String, required: true },
    about: { type: String, required: true },
    education: { type: [String], required: true },
    specializations: { type: [String], required: true },
    achievements: { type: [String], required: true },
    schedule: { type: [String], required: true }
});