import "dotenv/config";
import app from "./app.js";
import { PORT } from "./config/variables.js";
import { connectDB } from "./config/database.js";

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});
