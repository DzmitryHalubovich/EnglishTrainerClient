import React from "react";
import './style/App.css'
import Header from "./components/UI/Header/Header";
import MyButton from "./components/UI/Button/MyButton";
import WordsList from "./components/Request/WordsList";
import NavigationPanel from "./components/UI/Navigation/NavigationPanel";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavigationPanel/>
      <WordsList/>
    </div>
  );
}

export default App;
