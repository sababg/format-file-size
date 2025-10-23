import "./styles.css";
import { formatFileSize } from "./sizeDisplayUtils";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {formatFileSize(300000)}
    </div>
  );
}
