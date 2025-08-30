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
  propietario: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    enum: ['habilitado', 'inhabilitado'],
    default: 'habilitado', 
  }
});

const AnimalPaciente = mongoose.model("AnimalPaciente", animalPacienteSchema);

export default AnimalPaciente;
