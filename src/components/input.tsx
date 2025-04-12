import { useState } from "react";

interface Props {
  onAdd: (s: string) => void;
}

export function Input({ onAdd }: Props) {
  const [text, setText] = useState("");

  function handleKeyChange(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  }

  return (
    <div className="h-input-block">
      <h1>Task Tracker</h1>
      <div className="input-container">
        <input
          className="input"
          placeholder="Start writing and press enter to create task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyChange}
        />{" "}
        <button
          className="button"
          onClick={() => {
            onAdd(text);
            setText("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
