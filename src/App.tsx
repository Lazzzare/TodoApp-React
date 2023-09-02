import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [LightMode, setLightMode] = useState(false);
  return (
    <div
      className={`w-full h-screen flex justify-center ${
        LightMode ? "bg-white" : "bg-[#171823]"
      }`}
    >
      <Header LightMode={LightMode} setLightMode={setLightMode} />
    </div>
  );
};

export default App;
