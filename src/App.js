import { useState } from 'react';
import { Modal } from 'bootstrap/dist/js/bootstrap'
import { uid } from 'uid';
import { Icon } from '@iconify/react';
import './App.css';
import List from './List';

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
    const warningModal = new Modal(document.getElementById('warning-modal'))
    const successModal = new Modal(document.getElementById('success-modal'))
    const updateModal = new Modal(document.getElementById('update-modal'))
    
    if(formData.name === "" || formData.telp === ""){
      warningModal.show()
      setTimeout(() => { warningModal.hide() }, 3000)
      return false
    }

    if(isEdit.status){
      data.forEach((contact) => {
        if(contact.id === isEdit.id){
          contact.name = formData.name
          contact.telp = formData.telp
        }
      })
      updateModal.show()
      setTimeout(() => { updateModal.hide() }, 3000)
    } else {
      data.push({id: uid(), name: formData.name, telp: formData.telp}) //masukkan semua data dari input ke State contacts
      successModal.show()
      setTimeout(() => { successModal.hide() }, 3000)
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
      <div className="row justify-content-center pt-4">
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
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
          <div className="bg-dark text-center mt-5 px-3 py-2">
            <div className="smallText text-light">Made with react & bootstrap.
              Uses fake json API to CRUD the data which uploaded on&nbsp;
              <a href="https://github.com/aprizalabyan/fakeAPI" target="_blank" rel="noreferrer">github</a>.
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="warning-modal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex gap-2 align-items-center">
              <h1><Icon icon="mdi:warning-circle-outline" /></h1>
              <span>Name or Telp cannot be blank,<br/>
              Please check again</span>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="success-modal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <h1><Icon icon="mdi:success-circle-outline" /></h1>
              <span>Contact added successfully</span>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="update-modal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <h1><Icon icon="mdi:success-circle-outline" /></h1>
              <span>Contact updated successfully</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;