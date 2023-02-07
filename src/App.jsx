import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <main className="bg-zinc-400 h-screen">
      <div className="container mx-auto bg-sky-400 rounded-md p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};

export default App;
