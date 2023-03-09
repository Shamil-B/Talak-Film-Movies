import { createRoot } from "react-dom/client";
import App from "./app";

const rootElement = document.getElementById("root");

// Create a new root and render the App component inside it
const root = createRoot(rootElement);
root.render(<App />);
