import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";


export default function Examples(){

    const [selectedTopic,setSelectedTopic] = useState(null);
      
      function handleSelect(selectedButton){
            setSelectedTopic(selectedButton);
            console.log(selectedTopic);
        }
    
    return (<Section title ="Examples" id='examples'>
          <menu>
              {/* <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect("components")}>
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
                </TabButton> */}
              {Object.entries(EXAMPLES).map(([key, example]) => (
                  <TabButton
                    key={key}
                    isSelected={selectedTopic === key}
                    onSelect={() => handleSelect(key)}
                  >
                    {example.title}
                  </TabButton>
                ))}
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
        </Section>);
}