import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import { LoginScreen } from "./components/screens/LoginScreen";
import { PostsScreen } from "./components/screens/PostsScreen";
import { CreatePostScreen } from "./components/screens/CreatePostScreen";
import { AboutScreen } from "./components/screens/AboutScreen";
import { ManagePostScreen } from "./components/screens/ManagePostScreen";
import { PreviewPostScreen } from "./components/screens/PreviewPostScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import Header from "./components/layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" Component={LoginScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/stories/new" Component={CreatePostScreen} />
            <Route path="/stories" Component={PostsScreen} />
            <Route path="/stories/edit/:id" Component={ManagePostScreen} />
            <Route path="/stories/preview/:id" Component={PreviewPostScreen} />
            <Route path="/" Component={HomeScreen} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
