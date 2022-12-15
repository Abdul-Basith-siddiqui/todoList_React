import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    // hook state of obj
    title: "", // properties
    content: "",
  });

  const handleChange = (event) => {
    //handling when input in typed
    const { name, value } = event.target; //destructuring
    setNote((prevNote) => {
      // taking the previous ver of obj
      return {
        ...prevNote, // using spread to make individual properties
        [name]: value, // [name]- title or content , dynamically updating the obj
      };
    });
  };

  function submitNote(event) {
    props.addNote(note); // passing the note obj to addNotes fun in App.jsx
    setNote({
      // making the state empty  this -- value={note.content} and value={note.title}
      title: "",
      content: "",
    }); // THIS will set the value of input to empty when user press add button -- control component
    event.preventDefault();
  }

  return (
    <div onSubmit={submitNote}>
      <form>
        <input
          onChange={handleChange} // eventListener - function call
          name="title"
          value={note.title} // control component
          placeholder="Title"
        />
        <textarea
          onChange={handleChange} // eventListener - function call
          name="content"
          value={note.content} // control component
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

//  <button type="submit">Add</button>   -- we can also write eventLintener in button instead of writing in form
