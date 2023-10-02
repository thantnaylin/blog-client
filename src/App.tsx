import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./components/screens/HomeScreen";
import { StoryDetails } from "./components/screens/StoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="story/:id" Component={StoryDetails} />
        <Route path="*" Component={HomeScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
