import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts(){
  return (<Section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=>
            <li><CoreConcept key={conceptItem.title} {...conceptItem}/></li>
          )}
        </ul>
        </Section>);
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