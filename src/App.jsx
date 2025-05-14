import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form'



function App() {
  const [dataForm, setDataForm] = useState({
    author: "",    // Nome dell'autore
    title: "",     // Titolo del post
    body: "",      // Contenuto del post
    public: false  // Flag per indicare se il post è pubblico
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form
    // Invia i dati all'API usando axios
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", dataForm)
      .then((resp) => {
        console.log(resp.data); // Mostra la risposta del server in console
      });
  };


  return (
    // Container fluid con margine superiore
    <div className="container-fluid mt-5">
      <h1>Form</h1>
      <div className="row">
        {/* Colonna che occupa 8/12 su schermi large, full width su mobile */}
        <div className="col-12 col-lg-8">
          {/* Componente Form con passaggio delle props necessarie */}
          <Form
            formData={dataForm}      // Dati correnti del form
            handleChange={setDataForm} // Funzione per aggiornare i dati
            onSubmit={handleSubmit}    // Funzione per gestire l'invio
          />
        </div>
      </div>
    </div>
  )
}

export default App
