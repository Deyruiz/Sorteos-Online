import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../config/db.js'; // ✅ Corrección: sube un nivel a la carpeta config

// Configurar variables de entorno
dotenv.config();

// Crear la app de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a la base de datos MongoDB
connectDB();

// Ruta simple de prueba
app.get("/", (req, res) => {
  res.send("🚀 Servidor Sorteos Online funcionando correctamente");
});

// Puerto
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
