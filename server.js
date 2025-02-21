import express from 'express';
import cors from 'cors';
import bfhlRouter from './routes/bfhl.js';

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.use('/bfhl', bfhlRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
});
