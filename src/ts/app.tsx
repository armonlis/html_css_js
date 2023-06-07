import Header from "./header";
import Agent from "./agent";
import { useState, useEffect } from "react";

export default function App() {

    const [agentSelectState, setAgentSelectState] = useState([false, false, false, false]);
    const orientation = window.screen.orientation.type;
    const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
    const [agentShowState, setAgentShowState] = useState([isLandscape, isLandscape, isLandscape, isLandscape]);
        
    function resizeHandler() {
      setAgentSelectState([false, false, false, false]);
      const orientation = window.screen.orientation.type;
      const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
      setAgentShowState([true, isLandscape, isLandscape, isLandscape]);
    };
    
    function touchHandler(event) {
      console.log(event);
    };

    useEffect(() => { 
      function removeResList() {
        window.removeEventListener('resize', resizeHandler);
      };
      function removeTouch() {
        window.removeEventListener('touchstart', touchHandler);
        window.removeEventListener('touchend', touchHandler);
      };
      return () => { removeResList(); removeTouch(); };
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
    window.addEventListener('touchstart', touchHandler);
    window.addEventListener('touchend', touchHandler);

    return (
        <div className="app">
            <Header /> 
            <div className="app_agents-container" id="app_agents-container" onClick={agentClickHandler}>
                { agentShowState[0] ? <Agent id="agent0" selected={agentSelectState[0]}/> : '' }
                { agentShowState[1] ? <Agent id="agent1" selected={agentSelectState[1]}/> : '' }
                { agentShowState[2] ? <Agent id="agent2" selected={agentSelectState[2]}/> : '' }
                { agentShowState[3] ? <Agent id="agent3" selected={agentSelectState[3]}/> : '' }
            </div>  
        </div>
    );
};