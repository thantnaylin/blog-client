import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "./components/screens/LoginScreen";
import { CreatePostScreen } from "./components/screens/CreatePostScreen";
import { ManagePostScreen } from "./components/screens/ManagePostScreen";
import { PreviewPostScreen } from "./components/screens/PreviewPostScreen";
import { HomeScreen } from "./components/screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginScreen} />
        {/*<Route path="/about" Component={About} />*/}
        <Route path="/stories/new" Component={CreatePostScreen} />
        <Route path="/stories/edit/:id" Component={ManagePostScreen} />
        <Route path="/stories/preview/:id" Component={PreviewPostScreen} />
        <Route path="/" Component={HomeScreen} />
        <Route path="*" Component={HomeScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
