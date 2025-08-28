import mongoose from "mongoose";

const animalPacienteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  raza: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  propietario: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("AnimalPaciente", animalPacienteSchema);
