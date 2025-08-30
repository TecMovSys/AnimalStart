import './App.css';
import ObtenerAnimal from './components/obtenerAnimal/obtenerAnimal';
import AgregarAnimal from './components/agregarAnimal/agregarAnimal';  

import Navbar from './components/NavBar/NavBar';  
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([ 
    {
      path: "/",
      element: (
        <>
          <Navbar />  
          <ObtenerAnimal />  
        </>
      ),
    },
    {
      path: "/agregarAnimal",
      element: (
        <>
          <Navbar /> 
          <AgregarAnimal /> 
        </>
      ),
    },

  ]);

  return (
    <div className="App">
   
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
