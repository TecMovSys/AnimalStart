import citaMedicaController from ".../model/citaMedicaController.js";

export const getAllanimalPaciente = async (req, res) => {
    try {
        const citaMedicaData = await citaMedicaController.find();
        if (!citaMedicaData || citaMedicaData.length === 0) {
            return res.status(404).json({message: "Animal paciente not found."})
        }
        return res.status(200).json(citaMedicaData)
    } catch (error){
        res.status(500).json({errorMessage: error.message})
    }
}