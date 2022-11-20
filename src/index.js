import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'
import walletRoutes from './routes/walletRoutes.js'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(walletRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server runing in port ${port}`));
