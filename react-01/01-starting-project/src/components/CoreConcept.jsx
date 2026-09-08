export default function CoreConcept({image,conceptHeading,conceptData}){ // parameters are passed as an object
  // you can also put directly -> as props <-- props will be one object containing all values
  // and access as props.image, props.conceptHeading etc...
  return (
  <div>
    <img src={image} alt={conceptHeading+" image"} />
    <h3>{conceptHeading}</h3>
    <p>{conceptData}</p>
  </div>
  );
}