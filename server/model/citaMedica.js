import mongoose from "mongoose";

const citaMedica = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  mascota: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mascota", // ← este debe coincidir con el nombre del modelo de mascota
    required: true,
  },
  veterinario: {
    type: String, // o `ref: 'Usuario'` si tienes un modelo de usuarios
    required: true,
  },
  motivo: {
    type: String,
    required: true,
  },
  notas: {
    type: String,
    default: "",
  },
  estado: {
    type: String,
    enum: ["pendiente", "completada", "cancelada"],
    default: "pendiente",
  },
}, {
  timestamps: true, // crea automáticamente createdAt y updatedAt
});

export default mongoose.model("citaMedica",citaMedicaSchema)