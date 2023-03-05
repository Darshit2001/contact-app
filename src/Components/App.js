import React, { useState, useEffect } from 'react'
import '../App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import { v4 as uuid } from 'uuid';
import Api from '../Api/Contact'
import Addcontact from './Addcontact'
import Contactlist from './Contactlist'
import ContactDetail from './ContactDetail';

function App() {

  const Local_Storage_Key = "contacts"
  const [Contacts, setContacts] = useState([]);

  //Retrive Previous Contacts
  const RetrivePriviousdata = async () => {
    const responce = await Api.get("/contacts");
    
    return responce.data;
  }
  //
  async function Adddata(name, email) {
    const k = uuid();
    const request = {
      id: k,
      name: name,
      email: email
    }
    const responce = await Api.post("/contacts", request);
    console.log(responce.data);
    setContacts([...Contacts, responce.data])
    

  }


  const DeleteContact = async (id) => {
    await Api.delete(`/contacts/${id}`)
    const newContact = Contacts.filter((val) => {
      return val.id !== id;
    })
    setContacts(newContact);
  }


  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const olddata = await RetrivePriviousdata();
      if (olddata) setContacts(olddata);
    }
    getAllContacts();

  }, []);


  useEffect(() => {
    //localStorage.setItem(Local_Storage_Key, JSON.stringify(Contacts));
  }, [Contacts])


  return (
    <>
      <div className="ui container getpadding">
        <Header />
        <Routes>
          <Route exact path="/" element={<Addcontact Adddata={Adddata} />} />
          <Route exact path="/contactlist" element={<Contactlist Contacts={Contacts} getContactid={DeleteContact} />} />
          <Route exact path="/contact/:id" element={<ContactDetail />} />
        </Routes>


      </div>

    </>
  );
}

export default App;
