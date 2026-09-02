import { Schema, model, Document } from 'mongoose';


export interface IPatient extends Document {
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    condition: string;
    phone: string;
    createdAt: Date;
}

const PatientSchema = new Schema<IPatient>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    condition: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Patient = model<IPatient>("patient", PatientSchema)