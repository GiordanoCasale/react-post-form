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

  setDataForm({
    ...dataForm,
    [e.target.name]:
      e.target.type === "checkbox" ? e.target.checked : e.target.value,
  })

  const postData = () => {
    e.preventDefault();
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", dataForm).then((resp) => {
      console.log(resp.data);
    });
  };


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
