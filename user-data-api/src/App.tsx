import React, { FC, useState } from "react";
import UserData from "./UserData";

interface Props {}

const App: FC<Props> = () => {

  const [increment, setIncrement] = useState(1);

  const nextPage = () => setIncrement(increment+1);
  console.log(increment);
  

  return (
    <div className="App">
      <UserData page={increment} title="Top Performers" />
      
      <div className="mx-auto max-w-max mt-5 ">
        <button className="bg-gray-500 px-4 py-2 rounded-full font-semibold text-white
        hover:bg-gray-800"
        onClick ={nextPage} >
          Next
        </button>
      </div>
    
    </div>
  );
}

App.defaultProps ={};

export default App;
