import React from 'react'
import ContactCard from './ContactCard';

function Contactlist(props) {
   
   function clickhandler(id)
   { props.getContactid(id);

   }
   const rendercontactlist=props.Contacts.map((contact)=>{
     return (
       <ContactCard contact={contact} findid={clickhandler} />
     );
   })

    return (
    <>  
        <div className="getpadding">{rendercontactlist}</div>
    </>
  )
}

export default Contactlist