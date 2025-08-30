import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap'; 
import "./obtenerAnimal.css";

export default function ObtenerAnimal() {
  const [obtenerAnimal, setObtenerAnimal] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: "", especie: "", raza: "", edad: "", propietario: "", email: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/animalPaciente");
        setObtenerAnimal(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = (animal) => {
    if (!animal?._id) {
      console.error("Animal no válido", animal);
      return;
    }
    setCurrentAnimal(animal);
    setFormData({
      name: animal.name, 
      especie: animal.especie, 
      raza: animal.raza,
      edad: animal.edad, 
      propietario: animal.propietario, 
      email: animal.email
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentAnimal?._id) {
      alert("No se pudo actualizar la mascota: ID no válido.");
      return;
    }

    try {
      await axios.put(`http://localhost:8000/api/animalPaciente/${currentAnimal._id}`, formData);
      setObtenerAnimal(prev => prev.map(animal => animal._id === currentAnimal._id ? { ...animal, ...formData } : animal));
      setShowModal(false);
      alert("Mascota actualizada correctamente.");
    } catch (error) {
      console.error("Error al actualizar la mascota:", error);
      alert("Hubo un error al actualizar la mascota.");
    }
  };

  const handleDelete = async (id) => {
    if (!id) return alert("ID no válido");
    if (window.confirm("¿Estás seguro de que quieres eliminar esta mascota?")) {
      try {
        await axios.delete(`http://localhost:8000/api/animalPaciente/${id}`);
        setObtenerAnimal(prev => prev.filter(animal => animal._id !== id));
        alert("Mascota eliminada correctamente");
      } catch (error) {
        console.error("Error al eliminar la mascota:", error);
        alert("Hubo un error al eliminar la mascota.");
      }
    }
  };

  return (
    <div className="animalTable">
      <Link to="/agregarAnimal" className="btn btn-primary">
        Agregar una Mascota a la sala de espera <i className="fa-solid fa-user-plus"></i>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th><th>Especie</th><th>Raza</th><th>Edad</th><th>Propietario</th><th>Email</th><th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {obtenerAnimal.map((animal, index) => (
            <tr key={animal._id || index}>
              {/* Elimino la columna de ID para no mostrarlo al usuario */}
              <td>{animal.name}</td>
              <td>{animal.especie}</td>
              <td>{animal.raza}</td>
              <td>{animal.edad}</td>
              <td>{animal.propietario}</td>
              <td>{animal.email}</td>
              <td className="actionsButtons">
                <Button variant="info" onClick={() => handleOpenModal(animal)} className="btn btn-info btn-sm me-1">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(animal._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para editar la mascota */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {["name", "especie", "raza", "edad", "propietario", "email"].map((field) => (
              <Form.Group key={field} controlId={`form${field.charAt(0).toUpperCase() + field.slice(1)}`}>
                <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                <Form.Control
                  type={field === "edad" ? "number" : "text"}
                  placeholder={`Ingrese ${field}`}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit">Actualizar Mascota</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
