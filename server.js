import express from 'express';
import cors from 'cors';
import bfhlRouter from './routes/bfhl.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from React frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/bfhl', bfhlRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
});
