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


// Longer static method used previously to render the list 

{/* <li> */}
            {/* <CoreConcept image={CORE_CONCEPTS[0].image}
           conceptHeading={CORE_CONCEPTS[0].conceptHeading}
           conceptData={CORE_CONCEPTS[0].conceptData}/> */}
           
            {/* Instead use Spread operator --> ...ObjectContainingArray[index] */}

            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
          </li>
          <li>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
          </li>
          <li>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
          </li>
          <li>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </li> */}

export default App;
