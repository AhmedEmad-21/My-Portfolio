import { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="w-full max-h-fit overflow-hidden text-foreground relative">
      {/* Background Pattern & Blobs */}
      <GlobalBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main View */}
      {!activeSection ? (
        <BottomNavBar />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
