import React from "react";
import ConfirmationDialog from "./ConfirmationDialog";

function App() {
  return (
    <div className="App">
      <ConfirmationDialog Description="Do you really want to delete these records? This process cannot be undone." />
    </div>
  );
}

export default App;
