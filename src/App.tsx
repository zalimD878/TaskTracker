import { useState } from "react";
import { Input } from "./components/input";
import { TaskList } from "./components/taskList";
import "./App.css";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  let [nextIndex, setNextIndex] = useState(0);

  function handleAdd(text: string) {
    let nextTasks = [{ id: nextIndex, text: text, done: false }, ...tasks];
    setNextIndex(nextIndex + 1);
    if (text) {
      setTasks(nextTasks);
    }
  }

  function handleChange(nextList: Task) {
    let nextTask = tasks.map((t) => {
      if (t.id === nextList.id) return nextList;
      else return t;
    });

    let notDone = nextTask.filter((n) => n.done !== true);
    let done = nextTask.filter((n) => n.done === true);

    setTasks([...notDone, ...done]);
  }

  function handleDelete(index: number) {
    let nextTask = tasks.filter((t) => t.id !== index);
    setTasks(nextTask);
  }

  return (
    <div className="main">
      <Input onAdd={handleAdd} />
      <TaskList list={tasks} onRemove={handleDelete} onChange={handleChange} />
    </div>
  );
}
