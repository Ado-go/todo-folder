import "../css/NoteInserter.css";

function NoteInserter({ onClickAddNote }: { onClickAddNote: () => void }) {
  return (
    <div onClick={onClickAddNote} className="inserter">
      <p className="note-add">+</p>
    </div>
  );
}

export default NoteInserter;
