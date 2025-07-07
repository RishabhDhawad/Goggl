import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./contexts/StateContextProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesComponent from "./components/RoutesComponent";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  React.useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <StateContextProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
            <RoutesComponent />
          </main>
          <Footer />
        </div>
      </Router>
    </StateContextProvider>
  );
}

export default App;
