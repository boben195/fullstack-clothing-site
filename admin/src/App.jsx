import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Login from "./components/Login/Login";

export const backendUrl = "http://localhost:4000";
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("adminToken") || null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("adminToken", token);
    } else {
      localStorage.removeItem("adminToken");
    }
  }, [token]);

  return (
    <div className="app-container">
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div className="app-content">
            <Sidebar setToken={setToken} />
            <div className="page-content">
              <Routes>
                <Route path="/add" element={<Add token={token || ""} />} />
                <Route path="/list" element={<List token={token || ""} />} />
                <Route
                  path="/orders"
                  element={<Orders token={token || ""} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
