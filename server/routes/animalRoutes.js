import express from "express";
import { getAllAnimalPaciente, create,getAllAnimalPacienteById,updateanimalPaciente, deleteanimalPaciente } from '../controller/animalPacienteController.js';


const router = express.Router();
router.get("/animalPaciente", getAllAnimalPaciente);

// Obtener todos los pacientes
router.get("/animalPaciente", getAllAnimalPaciente);

// Crear un nuevo paciente
router.post("/animalPaciente", create);

// Obtener un paciente por ID
router.get("/animalPaciente/:id",getAllAnimalPacienteById);

// Actualizar un paciente por ID
router.put("/animalPaciente/:id", updateanimalPaciente);

// Eliminar un paciente por ID
router.delete("/animalPaciente/:id", deleteanimalPaciente);


export default router;
