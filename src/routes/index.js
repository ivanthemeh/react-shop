import React from "react";
import { Route } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import MainPage from "./MainPage";

import "../../stylesheet/components/components.scss";

const App = () => (
  <MainLayout>
    <Route path="/" component={MainPage} />
  </MainLayout>
);

export default App;