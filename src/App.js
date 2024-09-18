import "./styles.css";
import "./components/Home.js";
import "./components/BlogList.js";

export default function App() {
  return (
    <div className="App">
      <Home />
      <BlogList />
    </div>
  );
}
