import { useState } from 'react';
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

  return (
    <div className="container">
      <div className="row justify-content-center py-4">
        <div className="col-4">
          <h2 className="text-center mb-4">My Contact List</h2>
          <form className="pt-4">
            <div className="mb-3">
              <label for="name" className="form-label mb-0">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label for="telp" className="form-label mb-0">Telp.</label>
              <input type="text" className="form-control" id="telp" />
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
