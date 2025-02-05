import express from "express";
import cors from "cors";
import routes from "./routes/index.js"; // Importa todas las rutas

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", routes);

export default app;
