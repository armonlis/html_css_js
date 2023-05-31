import Header from "./header";
import Agent from "./agent";
import { useState, useEffect } from "react";

export default function App() {

    const [agentSelectState, setAgentSelectState] = useState([false, false, false, false]);
    const orientation = window.screen.orientation.type;
    const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
    const [agentShowState, setAgentShowState] = useState(isLandscape);
        
    function resizeHandler() {
      setAgentSelectState([false, false, false, false]);
      const orientation = window.screen.orientation.type;
      const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
      setAgentShowState(isLandscape);
    };
    
    function swapHandler(event) {
      
    };

    useEffect(() => { 
      function removeResList() {
        window.removeEventListener('resize', resizeHandler);
      };
      function removeSwap() {
        window.removeEventListener('touchmove', swapHandler);
      };
      return () => { removeResList(); removeSwap(); };
    });

    function agentClickHandler(event) {
      const parent = event.target.offsetParent;
      const newState = [];
      const idNum = +parent.id.replace(/[a-z]/g, '');
      for (let i = 0; i < 5; i += 1) {
        newState.push(i === idNum);
      };
      setAgentSelectState(newState);
    }; 
    
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('touchmove', swapHandler);

    return (
        <div className="app">
            <Header /> 
            <div className="app_agents-container" id="app_agents-container" onClick={agentClickHandler}>
                <Agent id="agent0" selected={agentSelectState[0]}/>
                { agentShowState ? <Agent id="agent1" selected={agentSelectState[1]}/> : '' }
                { agentShowState ? <Agent id="agent2" selected={agentSelectState[2]}/> : '' }
                { agentShowState ? <Agent id="agent3" selected={agentSelectState[3]}/> : '' }
            </div>  
        </div>
    );
};