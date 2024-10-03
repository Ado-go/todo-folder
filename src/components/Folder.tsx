import Note from "./Note";
import NoteInserter from "./NoteInserter";

import { useState } from "react";

import "../css/Folder.css";

function Folder() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "hello from note",
    },
    {
      id: 2,
      content: "hello from another note",
    },
  ]);

  const lastNoteId =
    notes[notes.length - 1] === undefined ? 0 : notes[notes.length - 1].id;

  const handleAddNewNote = () => {
    setNotes((prev) => {
      return [...prev, { id: lastNoteId + 1, content: "New note" }];
    });
  };

  const handleDeleteNote = (idToDelete: number) => {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== idToDelete);
    });
  };

  return (
    <>
      <div className="tab"></div>
      <div className="folder">
        <div className="paper">
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                onDeleteNote={() => handleDeleteNote(note.id)}
                content={note.content}
              />
            );
          })}
          {notes.length < 9 && (
            <NoteInserter onClickAddNote={handleAddNewNote} />
          )}
        </div>
      </div>
    </>
  );
}

export default Folder;
