import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  // setter(setSelectedTopic in this case) sets the value 
  // of selectedTopic as the new value while updating other components
  
    console.log("App component loaded");

  return (
   <>
    <Header/>
    <main>
        <CoreConcepts/>
        <Examples/>
      </main>
   </>
  );
}


export default App;
