import { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import Form1 from "./forms/Form1.json";
import ShowFormData from "./components/ShowFormData";
function App() {
  const [formJSON, setFormJSON] = useState(null);
  console.log(formJSON);
  return (
    <div>
      <DynamicForm formData={Form1} setFormJSON={setFormJSON} />
      {formJSON && <ShowFormData data={formJSON} />}
    </div>
  );
}

export default App;
