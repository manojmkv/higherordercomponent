import Comp1 from "./comp1";
import Comp2 from "./comp2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Comp1 randomNumber="123" />
      <Comp2 randomNumber="123" />
    </div>
  );
}
