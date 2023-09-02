import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/Todos";

const App = () => {
  const [LightMode, setLightMode] = useState(false);
  return (
    <div
      className={`w-full h-screen flex flex-col  ${
        LightMode ? "bg-white" : "bg-[#171823]"
      }`}
    >
      <Header LightMode={LightMode} setLightMode={setLightMode} />
      <Todos LightMode={LightMode} />
    </div>
  );
};

export default App;
