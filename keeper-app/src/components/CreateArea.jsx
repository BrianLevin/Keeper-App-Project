import React, { useState } from "react";

import AddIcon from '@material-ui/icons/Add';

// floating action button
import Fab from '@material-ui/core/Fab';

import Zoom from '@material-ui/core/Zoom';

//stateful constants with object containing title and content
// const note function setNote
function CreateArea(props) {
const [note,setNote] = useState({
    // intial state is empty
title: "",
content: ""


}) 
// function which will update the changes
function handleChange(event){

  // create new destructured object which will tap into event .taget.name and event.target.value
  const{name,value}= event.target;



  setNote(prevNote => {

      return{
          // spread operator which will spread current key value pairs which currently exist in note and add it to final object
      ...prevNote,
      // turns string name to the actual value
      [name]: value

      }

  });

}

function submitNote (event) {
    // props which will pas the note to the add note function on app.js page
    props.onAdd(note);
// clear out note object once submitted
setNote({
    title: "",
    content: ""
})

// prevents forum from refreshining once a note is submitted
event.preventDefault();
}


  return (
    <div>
      <form className = "create-note">
        <input name="title"  onChange= {handleChange} value= {note.title} placeholder="Title" />
        <textarea name="content"  onChange = {handleChange} value = {note.content} placeholder="Take a note..." rows="3" />
        <Zoom in={true}>
        {/* Button which will pass note back  from handle change to note */}
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );

  }
  
export default CreateArea;