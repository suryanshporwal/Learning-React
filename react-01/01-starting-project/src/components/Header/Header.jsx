import reactImg from "../../assets/react-core-concepts.png"; // reactImg is a string now
import "./Header.css";
const reactDescriptions=['Some','Other','Another','New','More'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max));
}

export default function Header(){
  const random= reactDescriptions[genRandomInt(reactDescriptions.length)];
  return ( <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {random} Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>);
}
