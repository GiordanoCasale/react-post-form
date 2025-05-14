import { useState } from 'react'
import axios from 'axios'



function App() {
  const [dataForm, setDataForm] = useState({
    author: "",
    title: "",
    body: "",
    public: "",
  });


  return (
    <div>
      <h1>bella frate</h1>
    </div>
  )
}

export default App
