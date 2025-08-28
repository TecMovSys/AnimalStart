import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/animalRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URI || "mongodb://localhost:27017/mern";

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use("/api", route); 

// Conexión a MongoDB y arranque del servidor
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Base de datos conectada exitosamente");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
