import Note from "./Note";
import "../css/Folder.css";

function Folder() {
  return (
    <>
      <div className="tab"></div>
      <div className="folder">
        <Note />
        <Note />
      </div>
    </>
  );
}

export default Folder;
