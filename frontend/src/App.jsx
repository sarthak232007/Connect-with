import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <>
      <h1>Frontend Connected ✅</h1>
      <h2>{message}</h2>
    </>
  );
}

export default App;
