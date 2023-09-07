import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { MainPageComponent } from "./components/MainPageComponent/MainPageComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPageComponent/>,
    },

    {
      path: "/:city",
      element: (
        <Dashboard/>
      ),
    },
  ]);
  return (
    <div className={"main"}>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
