import "../css/Note.css";

function Note({
  content,
  onDeleteNote,
}: {
  content: string;
  onDeleteNote: () => void;
}) {
  return (
    <div className="note">
      <p>{content}</p>
      <div onClick={onDeleteNote} className="note-close">
        <p>X</p>
      </div>
    </div>
  );
}

export default Note;
