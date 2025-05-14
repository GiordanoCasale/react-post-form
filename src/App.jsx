import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form'



function App() {
  const [dataForm, setDataForm] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", dataForm)
      .then((resp) => {
        console.log(resp.data);
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Create Post</h2>
              <Form
                formData={dataForm}
                handleChange={setDataForm}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


