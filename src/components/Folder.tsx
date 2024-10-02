import Note from "./Note";
import "../css/Folder.css";

function Folder() {
  return (
    <>
      <div className="tab"></div>
      <div className="folder">
        <div className="paper">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </>
  );
}

export default Folder;
