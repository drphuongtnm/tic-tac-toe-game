import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((prev) => !prev);
    // setIsEditing(!isEditing);
  }
  function handleChange(e) {
    console.log(e);
    setPlayerName(e.target.value);
  }
  let editableName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editableName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
