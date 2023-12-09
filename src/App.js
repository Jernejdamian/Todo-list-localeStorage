import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';
import './App.css';

const hideDoneTasks = false;

const tasks = [
  {
    content: "Znaleść serial na wieczór", done: true
  },
  {
    content: "Oglądnąć film Informacja Zwrotna", done: false,
  },
];

function App() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
      />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={
          <Buttons
            hideDoneTasks={hideDoneTasks}
            tasks={tasks}
          />
        }
        body={
          <Tasks
            hideDoneTasks={hideDoneTasks}
            tasks={tasks}
          />
        }
      />
    </Container>
  );
}

export default App;
