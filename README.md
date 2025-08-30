# Proyecto Final: Integración de Backend y Frontend

## Autor: CShinoDev - Participante del Grupo E

## Descripción

Este proyecto tiene como objetivo aplicar los conceptos aprendidos en el módulo de desarrollo web, integrando **Frontend (React)** y **Backend (Node.js + Express)**. El CRUD tradicional que hemos trabajado en clase se adapta para manipular datos de un nuevo tipo de entidad (en lugar de usuarios, como se hizo en el curso). En este caso, se utilizaron **animales de pacientes** (o el tipo de información que desees), y se implementaron características adicionales como un **botón de acción para ver información detallada**.

## Requisitos

### Backend

El backend se desarrolla utilizando **Node.js** con el framework **Express** y una base de datos **MongoDB**. En él se maneja la lógica para realizar las operaciones de CRUD (Crear, Leer, Actualizar, Eliminar).

### Frontend

El frontend se construye con **React** para manejar la interfaz de usuario de manera dinámica. Utiliza las tecnologías de **React Router** para la navegación, **Axios** para la comunicación con la API del backend y **React Bootstrap** para la creación de los componentes de la interfaz.

## Características del Proyecto

1. **CRUD Completo**:
   - **Crear**: Agregar nuevos registros (animales, personajes, etc.).
   - **Leer**: Mostrar los registros en una lista.
   - **Actualizar**: Modificar registros existentes.
   - **Eliminar**: Eliminar un registro.
   
2. **Visualización Detallada**:
   - Implementación de un botón "Ver Información" que, al ser presionado, muestra detalles adicionales del registro, como una imagen representativa.

3. **Estilo y Tema Personalizado**:
   - Se puede elegir un tema para los datos mostrados (ejemplo: animales de pacientes).
   - La página principal cuenta con un título personalizado y se adapta a la temática seleccionada.

## Tecnologías Utilizadas

- **Frontend**:
  - React
  - React Router
  - Axios
  - React Bootstrap
  - CSS personalizado

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Instrucciones de Instalación

### Backend

1. Clona el repositorio del backend:

```bash
git clone <URL-del-repositorio-backend>
cd <nombre-del-repositorio-backend>
