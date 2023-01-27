import React ,{useState , useEffect} from 'react'
import '../App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import { v4 as uuid } from 'uuid';
import Addcontact from './Addcontact'
import Contactlist from './Contactlist'

function App() {
  
  const Local_Storage_Key="contacts"
  const [Contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(Local_Storage_Key)) ?? []
  );
  
  function Adddata(name ,email)
  { const k=uuid();
    setContacts([...Contacts , { id:k, name:name , email:email}])
    console.log(k,name ,email);

  }


  const DeleteContact = (id)=>{
    const newContact=Contacts.filter((val)=>{
      return val.id !== id;
    })
    setContacts(newContact);
  }


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);


  useEffect(()=>{
     localStorage.setItem(Local_Storage_Key , JSON.stringify(Contacts));
  },[Contacts])


  return (
    <>
      <div className="ui container getpadding">
      <Header/>
      <Routes>
      <Route exact path="/" element={<Addcontact Adddata={Adddata}/>} />
      <Route exact path="/contactlist" element={<Contactlist Contacts={Contacts} getContactid={DeleteContact}/>} />
      </Routes>
      
      
      </div>
      
    </>
  );
}

export default App;
