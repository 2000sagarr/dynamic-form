import { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import Form1 from "./forms/Form1.json";
import Form2 from "./forms/Form2.json";
import ShowFormData from "./components/ShowFormData";
function App() {
  const [formJSON, setFormJSON] = useState(null);
  const [showForm, setShowForm] = useState(1);
  //console.log(formJSON);
  return (
    <div>
      <div className="btn-show">
        <button
          onClick={() => {
            setShowForm(1);
            setFormJSON(null);
          }}
        >
          Form 1
        </button>
        <button
          onClick={() => {
            setShowForm(2);
            setFormJSON(null);
          }}
        >
          Form 2
        </button>
      </div>

      {showForm == 1 && (
        <DynamicForm formData={Form1} setFormJSON={setFormJSON} />
      )}
      {showForm == 2 && (
        <DynamicForm formData={Form2} setFormJSON={setFormJSON} />
      )}

      {formJSON && <ShowFormData data={formJSON} />}
    </div>
  );
}

export default App;
