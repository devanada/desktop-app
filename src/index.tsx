import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
