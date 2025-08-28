import bodyParser from "body-parser";
//import { json } from "body-parser";
import animalPaciente from "../model/animalPaciente.js";
import AnimalPaciente from "../model/animalPaciente.js";

//Crear un nuevo nuevo animal como paciente
export const create = async (req, res) => {
  try{
    const newanimalPaciente = new AnimalPaciente(req.body);
    const { email } = newanimalPaciente;
    const animalPacienteExist = await animalPaciente.findOne({email});
    if (animalPacienteExist){
      return res.status(400).json(
        {
          message: "La mascota que quiere ingresar ya existe con el email de este propietario"
        }
      )
    }

    const savedData = await newanimalPaciente.save();
    res.status(200).json({message: "Se ingreso con exito la mascota para el propietario de este email"});
  } catch (error) {
    res.status(500).json({errorMessage: error.message})
  }
}

// BUscar mascotas unicamente por ID
export const getAllAnimalPacienteById = async (req, res) => {
  try {
    const id = req.params.id;
    const animalPacienteExist = await animalPaciente.findById(id);

    if (!animalPacienteExist) {
      return res.status(200).json({message: "Mascota no encontrada"})

    }
    return res.status(400).json(animalPacienteExist);

  } catch ( error){
    res.status(500).json({errorMessage: error.message})
  }
}

// Actualizar una mascota
export const updateanimalPaciente = async (req, res) => {
  try{
    const id = req.params.id;
    const animalPacienteExist = await animalPaciente.findById(id);

    if (!animalPacienteExist) {
      return res.status(400).json({message: "Mascota no encontrada"})

    }
    const updateData = await animalPaciente.findByIdAndUpdate(id, req.body,{new:true});
    res.status(200).json({message: "Mascota actualizada correctamente"})
  } catch( error) {
    res.status(500).json({ errorMessage: error.message})
  }

}

// Elimininar una mascota

export const deleteanimalPaciente = async (req, res ) => {
  try {
    const id = req.params.id;
    const animalPacienteExist = await animalPaciente.findById(id);
    if ( animalPaciente) {
      return res.status(400).json({message: "Moscota no encontrada"})

    }
    await animalPaciente.findByIdAndDelete(id);
    res.status(200).json({message: "Mascota eliminada exitosamente"});

  }catch (error) {
    res.status(500).json({errorMessage: error.message})
  }
}


// Revisar si se encuentran mascotas ingresadas
export const getAllAnimalPaciente = async (req, res) => {
  try {
    const animalData = await AnimalPaciente.find();

    if (!animalData || animalData.length === 0) {
      return res.status(404).json({ message: "No se encontraron mascotas como pacientes." });
    }

    return res.status(200).json(animalData);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};
   