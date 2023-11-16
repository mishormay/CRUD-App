import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements, RouterProvider } from "react-router";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout />}>
        <Route
          index
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="addemployee"
          element={
            <>
              <AddEmployee />
            </>
          }
        />
      </Route>
    )
  );

  return (
    <>
      <div className="app">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
