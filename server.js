import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bfhlRoutes from './routes/bfhl.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoutes);

app.get('/', (req, res) => res.send('API is running...'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
