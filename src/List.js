import React from 'react'

const List = ({dataContact}) => {
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
                <button className="btn btn-dark">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List