import React from 'react'

const List = ({dataContact, handleEdit, handleDelete}) => {
  return (
    <div className="mt-5">
      <h5>Contact List</h5>
      <div className="list-group">
        {dataContact.map((contact) => {
          return(
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="d-flex flex-column">
                <span className="name">{contact.name}</span>
                <span className="telp">{contact.telp}</span>
              </div>
              <div className="d-flex gap-2 align-self-end">
                <button className="btn btn-dark" onClick={() => handleEdit(contact.id)}>Edit</button>
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#delete-modal-"+contact.id}>Delete</button>
              </div>
              <div className="modal fade" id={"delete-modal-"+contact.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <span>Are you sure,<br/>
                      You want to delete contact?</span>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(contact.id)} data-bs-dismiss="modal">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List