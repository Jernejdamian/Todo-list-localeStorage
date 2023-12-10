import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';
import './App.css';
import { useState } from 'react';

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const [tasks, setTasks] = useState([
    {
      id: 1, content: "Znaleść serial na wieczór", done: true
    },
    {
      id: 2, content: "Oglądnąć film Informacja Zwrotna", done: false,
    },
  ]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task, done: !task.done
        }
      return task;
    }))
  };

  const allTaskDone = () => {
    setTasks(tasks => tasks.map(task => (
      {
        ...task,
        done: true,
      }
    )))
  };

  const addNewTask = (content) => {
    setTasks(tasks => [...tasks, {
      content,
      done: false,
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    },
    ]);
  };

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask} />
        }
      />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={
          <Buttons
            toggleHideDone={toggleHideDone}
            hideDone={hideDone}
            tasks={tasks}
            allTaskDone={allTaskDone}
          />
        }
        body={
          <Tasks
            hideDone={hideDone}
            tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;
