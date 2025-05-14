import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form';



function App() {
  const [dataForm, setDataForm] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });


  return (
    <div className="container-fluid mt-5">
      <h1>Form</h1>
      <div className="row">
        <div className="col-12 col-lg-8">
          <Form formData={dataForm} handleChange={setDataForm} />
        </div>
      </div>
    </div>
  )
}

export default App
