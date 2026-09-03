import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import patientRoutes from './routes/patient.routes';
import { connectDB } from './config/db';


dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());


connectDB();


// Routes
app.use('/api/patients', patientRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req: Request, res: Response) => {
    res.send('Healthcare API is running smoothly...');
});

