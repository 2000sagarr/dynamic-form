import "./App.css";
import DynamicForm from "./components/DynamicForm";
import Form1 from "./forms/Form1.json";
function App() {
  return (
    <div>
      <DynamicForm formData={Form1} />
    </div>
  );
}

export default App;
