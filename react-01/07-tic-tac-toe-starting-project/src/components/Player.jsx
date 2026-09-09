import { useState } from "react";
import {toFunctionHash} from "viem";
import {setRpcUrl} from "viem/actions";
export default function Player(props){

    const [ isEditing,setisEditing ]=useState(false);
    const [ playerName,setPlayerName ]=useState(props.initialName);

    function handleEditing() {
      setisEditing((isEditing)=>!isEditing); 
      // can't do it like 
      // setisEditing(!isEditing); 
      // cuz if you paste it multiple times, 
      // lets say 2 times same thing, you might get an undesired output
      // cuz there is some delay in the execution
    }

    function handleChange(event) {
      console.log(event);
      setPlayerName(event.target.value);
    }

    let playerNameField=<span className="player-name">{playerName}</span>;

    if(isEditing){
      // two way binding -> feeding the same value extracted from the input
      playerNameField=<input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
        <li>
        <span className="player">
          {playerNameField}
          <span className="player-symbol">{props.playerSymbol}</span>
          </span>
          <button onClick={handleEditing}>{!isEditing? "Edit": "Save"}</button>
        </li>
      );
}