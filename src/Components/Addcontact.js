import React, { useState } from 'react'

function Addcontact(props) {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  function adddata(e) {
    e.preventDefault();
    if (name === "" || email === "")
     alert("Please fill all the values");
    else props.Adddata(name , email)
    setemail(""); setname("");

  }
  return (
    <>
      <div className="ui main getpadding">
        <h2>Add Contact</h2>
        
        <form className='ui form' onSubmit={adddata}>
          <div className="field">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Darshit Gupta' value={name} onChange={(e) => { setname(e.target.value) }}></input>
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input type="text" name='name' placeholder='darshitgupta@hmail.com' value={email} onChange={(e) => { setemail(e.target.value) }}></input>
          </div>
          <button className='ui button blue'>Add</button>
          
        </form>
        
      </div>
    </>
  )
}

export default Addcontact