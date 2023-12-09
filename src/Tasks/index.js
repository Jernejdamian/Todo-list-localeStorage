import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {
            tasks.map(task => (
                <li className={`task ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}>
                    <button className="task__button task__button--done">{task.done ? "✔️" : ""}</button>
                    <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.content}</span>
                    <button className="task__button task__button--remove">🗑</button>
                </li>
            ))
        }
    </ul>
);

export default Tasks;


