import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form';



function App() {
  const [dataForm, setDataForm] = useState({
    author: "",
    title: "",
    body: "",
    public: "",
  });


  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <form>
            <Form formData={dataForm} handleChange={setDataForm} />
          </form>
        </div>


        <BusinessCard data={formData} />
      </div>
    </div>
  )
}

export default App
