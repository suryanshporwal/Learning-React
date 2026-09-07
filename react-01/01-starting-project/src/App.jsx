import { useState } from "react"; 
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS,EXAMPLES } from "./data";

function App() {
  // setter(setSelectedTopic in this case) sets the value 
  // of selectedTopic as the new value while updating other components
  const [selectedTopic,setSelectedTopic] = useState(null);
  
  function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    console.log("App component loaded");

  return (
   <div>
    <Header/>
    <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=>
            <li><CoreConcepts key={conceptItem.title} {...conceptItem}/></li>
          )}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
              <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect("components")}>
                {EXAMPLES.components.title}
                </TabButton>
              <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect("jsx")}>
                {EXAMPLES.jsx.title}
                </TabButton>
              <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect("props")}>
                {EXAMPLES.props.title} 
                </TabButton>
              <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect("state")}>
                {EXAMPLES.state.title}
                </TabButton>
          </menu>
          {!selectedTopic ? (<p>Please select a topic.</p>):null}
          {selectedTopic ? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>): null}
        </section>
      </main>
   </div>
  );
}


// Longer static method used previously to render the list 

{/* <li> */}
            {/* <CoreConcepts image={CORE_CONCEPTS[0].image}
           conceptHeading={CORE_CONCEPTS[0].conceptHeading}
           conceptData={CORE_CONCEPTS[0].conceptData}/> */}
           
            {/* Instead use Spread operator --> ...ObjectContainingArray[index] */}

            {/* <CoreConcepts {...CORE_CONCEPTS[0]}/>
          </li>
          <li>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
          </li>
          <li>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
          </li>
          <li>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </li> */}

export default App;
