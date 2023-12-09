import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="section__buttons">
        {
            tasks.length > 0 && (
                <>
                    <button
                        className="section__header--button">
                        {hideDoneTasks ? "Pokaż " : "Ukryj "}
                        ukończone</button>
                    <button
                        className="section__header--button"
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszytskie</button>
                </>
            )
        }
    </div>
)

export default Buttons;