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

  const [isEdit, setIsEdit] = useState({
    id: null,
    status: false
  })

  const handleChange = (e) => {
    let data = {...formData} //copy semua data di State formData
    data[e.target.id] = e.target.value //ambil data dari input box
    setFormData(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = [...contacts] //copy semua data di State contacts

    if(formData.name === ""){
      alert("Nama Tidak Boleh Kosong")
      return false
    }
    if(formData.telp === ""){
      alert("Telpon Tidak Boleh Kosong")
      return false
    }

    if(isEdit.status){
      data.forEach((contact) => {
        if(contact.id === isEdit.id){
          contact.name = formData.name
          contact.telp = formData.telp
        }
      })
      alert("Berhasil Edit Contact")
    } else {
      data.push({id: uid(), name: formData.name, telp: formData.telp}) //masukkan semua data dari input ke State contacts
      alert("Berhasil Menambah Contact")
    }

    setIsEdit({id: null, status: false})
    setContacts(data)
    setFormData({name: "", telp: ""}) //kosongkan input setelah berhasil submit
  }

  const handleEdit = (idEdit) => {
    let data = [...contacts]
    let findData = data.find((contact) => contact.id === idEdit) //cari data contact berdasarkan id contact yang di Edit
    setFormData({name: findData.name, telp: findData.telp}) //set input box dengan data contact yang telah ditemukan
    setIsEdit({id: idEdit, status: true})
  }

  const handleDelete = (idDelete) => {
    let data = [...contacts]
    let filterData = data.filter((contact) => contact.id !== idDelete)  //menampilkan data contact kecuali id yang di delete
    setContacts(filterData)
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
          <List dataContact={contacts} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
