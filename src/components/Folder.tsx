import Note from "./Note";
import NoteInserter from "./NoteInserter";

import { useState, useEffect } from "react";

import "../css/Folder.css";

function Folder() {
  const notesInStorage = localStorage.getItem("notes");
  const [notes, setNotes] = useState<{ id: number; content: string }[]>(
    notesInStorage === null ? [] : JSON.parse(notesInStorage)
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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

  const handleContentChange = (noteId: number, newNoteContent: string) => {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === noteId) {
          return { ...note, content: newNoteContent };
        }
        return note;
      });
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
                id={note.id}
                content={note.content}
                onDeleteNote={handleDeleteNote}
                onContentChange={handleContentChange}
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
