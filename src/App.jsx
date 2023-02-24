import "./index.css";
import "./global.css";
import { Rating } from "./components/Ratings";

function App() {
  return (
    <div className="bg-zinc-900 w-full h-full flex flex-col justify-center items-center">
      <Rating />
    </div>
  );
}

export default App;
