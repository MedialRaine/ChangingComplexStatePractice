import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  //We initializate the stateful function of react, we create the three fields that we want to preserve of our contact/user.
  
  function handleChange(event){
    const {name, value} = event.target;
    //now we set our destructured variables that are gonna give us the information from the input fields
    setContact((prevValue)=> {
      if (name === "fName"){
        //in case that the field name is equal to "fName" then the code is just gonna actualizate the field with that name and so on.
        return{
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        }; 
      } else if (name === "lName") {
          return {
            fName: prevValue.fName,
            lName: value,
            email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName:prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1> 
        Hello {contact.fName} {contact.lName}
        //this is where we are gonna render the changes
      </h1>
      <p>{contact.email}</p>
      <form>
        // here what we have done it's just to add the onChange, value, which holds our function when a change 
        //is effectuated on the input fields, and the value which contains the value for more congruency.
        <input name="fName" onChange={handleChange} placeholder="First Name" value={contact.fName}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={handleChange} placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
