import { Task } from "../App";
import bin from "../assets/bin.svg";

interface Props {
  list: Task[];
  onRemove: (index: number) => void;
  onChange: (task: Task) => void;
}

export function TaskList({ list, onRemove, onChange }: Props) {
  return (
    <div className="list-container">
      <ul className="ul">
        {list.map((l) => {
          return (
            <li key={l.id} className="li">
              <div className="text-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={l.done}
                  onChange={(e) => onChange({ ...l, done: e.target.checked })}
                />
                {l.done ? (
                  <span className="text-line-through">{l.text}</span>
                ) : (
                  <span className="text">{l.text}</span>
                )}
              </div>

              <button className="button-del" onClick={() => onRemove(l.id)}>
                <img src={bin} alt="" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
