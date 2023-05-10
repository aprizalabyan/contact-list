import { useState } from 'react';
import './App.css';
import List from './List';
import { uid } from 'uid';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Roy Keane",
      telp: "087712688908"
    },
    {
      id: 2,
      name: "Jose Mourinho",
      telp: "087987625761"
    },
    {
      id: 3,
      name: "Pep Guardiola",
      telp: "089862557199"
    }
  ])

  const [formData, setFormData] = useState({
    name: "",
    telp: ""
  })

  const handleChange = (e) => {
    let data = {...formData} //copy semua data di State formData
    data[e.target.id] = e.target.value //ambil data dari input box
    setFormData(data)
  }

  const handleSubmit = (e) => {
    let data = [...contacts] //copy semua data di State contacts

    if(formData.name === ""){
      alert("Nama Tidak Boleh Kosong")
      return false
    }
    if(formData.telp === ""){
      alert("Telpon Tidak Boleh Kosong")
      return false
    }

    e.preventDefault()
    alert("Berhasil Menambah Contact")
    data.push({id: uid(), name: formData.name, telp: formData.telp}) //masukkan semua data dari input ke State contacts
    setContacts(data)
    setFormData({name: "", telp: ""}) //kosongkan input setelah berhasil submit
  }

  return (
    <div className="container">
      <div className="row justify-content-center py-4">
        <div className="col-4">
          <h2 className="text-center mb-4">My Contact</h2>
          <h5 className="pt-4">Add Contact</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label mb-0">Name</label>
              <input type="text" className="form-control" id="name" onChange={handleChange} value={formData.name} />
            </div>
            <div className="mb-3">
              <label className="form-label mb-0">Telp.</label>
              <input type="text" className="form-control" id="telp" onChange={handleChange} value={formData.telp}/>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Save</button>
          </form>
          <List dataContact={contacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
