import Header from "./header";
import Agent from "./agent";
import { useState } from "react";

export default function App() {

    const [agentState, setAgentState] = useState([false, false, false, false]);

    function agentClickHandler(event) {
      const parent = event.target.offsetParent;
      const newState = [];
      const idNum = +parent.id.replace(/[a-z]/g, '');
      for (let i = 0; i < 5; i += 1) {
        newState.push(i === idNum);
      };
      setAgentState(newState);
    };
    return (
        <div className="app">
            <Header /> 
            <div className="app_agents-container" id="app_agents-container" onClick={agentClickHandler}>
                <Agent id="agent0" selected={agentState[0]}/>
                <Agent id="agent1" selected={agentState[1]}/>
                <Agent id="agent2" selected={agentState[2]}/>
                <Agent id="agent3" selected={agentState[3]}/>
            </div>  
        </div>
    );
};