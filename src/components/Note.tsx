import "../css/Note.css";

function Note({
  id,
  content,
  onDeleteNote,
  onContentChange,
}: {
  id: number;
  content: string;
  onDeleteNote: (id: number) => void;
  onContentChange: (noteId: number, newNotecontent: string) => void;
}) {
  return (
    <div className="note">
      <textarea
        onChange={(input) => onContentChange(id, input.target.value)}
        name="content"
        defaultValue={content}
      ></textarea>
      <div onClick={() => onDeleteNote(id)} className="note-close">
        <p>X</p>
      </div>
    </div>
  );
}

export default Note;
