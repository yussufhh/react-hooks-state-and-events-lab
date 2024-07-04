import React,  { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isMode, setIsMode] = useState(false);
function handClick(){
  setIsMode (!isMode)
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isMode? "App dark" : "App light"
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handClick}>{isMode? 'dark Mode': 'light Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
