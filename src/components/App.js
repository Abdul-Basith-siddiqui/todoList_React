import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); //hook

  function addNotes(note) {
    // note is coming from createArea.jsx
    setNotes((prevValue) => {
      // setting the value into array
      return [...prevValue, note]; // using sperad op to add into array
    });
    console.log(notes);
  }

  function deleteNote(id) {
    // id is coming form nots.jsx
    setNotes((prevNote) => {
      // holding the previous notes array and filtering it removing the array object which has an index of id
      return prevNote.filter((note, index) => {
        return index !== id; // index which is not equal to id will be saved inside the array
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea // passing the function as a props
        addNote={addNotes}
      />

      {notes.map((notesObj, index) => {
        // looping thorough map and getting each obj
        return (
          <Note
            key={index} // getting the index value
            id={index} // same
            title={notesObj.title} //tapping into the obj and getting user typed title storing into title (custom attribute)
            content={notesObj.content} //tapping into the obj and getting user typed content storing into content (custom attribute)
            deleteNote={deleteNote} //  ]passing the function as a props
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
