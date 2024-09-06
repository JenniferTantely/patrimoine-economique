import express from "express";
import possessionRoutes from './routes/possession.routes.js';
import patrimoineRoutes from './routes/patrimoine.routes.js';
import cors from "cors";
const port = 3000;
const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://patrimoine-economique-front.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}));

app.use(express.json());

app.use("/possession", possessionRoutes);
app.use("/patrimoine", patrimoineRoutes);

app.listen(port, () => {
    console.log("Le serveur a démarré au port " + port)
})