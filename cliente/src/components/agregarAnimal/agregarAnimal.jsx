import React, { useState } from "react";
import axios from "axios";
import "./agregarAnimal.css"; 

export default function AgregarAnimal() {

  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [imagen, setImagen] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

 
    if (!nombre || !especie || !raza || !edad || !propietario || !email) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const nuevaMascota = {
      name: nombre, 
      especie: especie,
      raza: raza,
      edad: edad,
      imagen: imagen,
      propietario: propietario,
      email: email,
    };

    try {

      const response = await axios.post("http://localhost:8000/api/animalPaciente", nuevaMascota);
      alert("Mascota agregada correctamente");
      
   
      setNombre("");
      setEspecie("");
      setRaza("");
      setEdad("");
      setImagen("");
      setPropietario("");
      setEmail("");
    } catch (error) {
      console.error("Error al agregar la mascota:", error.response ? error.response.data : error.message);
      alert("Hubo un problema al agregar la mascota. Por favor, revisa la consola para más detalles.");
    }
  };

  return (
    <div className="agregarAnimal">
      <h2>Agregar una Nueva Mascota</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Especie</label>
          <input
            type="text"
            className="form-control"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Raza</label>
          <input
            type="text"
            className="form-control"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Edad</label>
          <input
            type="number"
            className="form-control"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Imagen (URL)</label>
          <input
            type="text"
            className="form-control"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Propietario</label>
          <input
            type="text"
            className="form-control"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Agregar Mascota</button>
      </form>
    </div>
  );
}
