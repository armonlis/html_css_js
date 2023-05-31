import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./header";
import Agent from "./agent";
import { useState, useEffect } from "react";
export default function App() {
    const [agentSelectState, setAgentSelectState] = useState([false, false, false, false]);
    const orientation = window.screen.orientation.type;
    const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
    const [agentShowState, setAgentShowState] = useState(isLandscape);
    function resizeHandler() {
        const orientation = window.screen.orientation.type;
        const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
        setAgentShowState(isLandscape);
    }
    ;
    useEffect(() => {
        function removeResList() {
            window.removeEventListener('resize', resizeHandler);
        }
        ;
        return removeResList;
    });
    function agentClickHandler(event) {
        const parent = event.target.offsetParent;
        const newState = [];
        const idNum = +parent.id.replace(/[a-z]/g, '');
        for (let i = 0; i < 5; i += 1) {
            newState.push(i === idNum);
        }
        ;
        setAgentSelectState(newState);
    }
    ;
    window.addEventListener('resize', resizeHandler);
    return (_jsxs("div", Object.assign({ className: "app" }, { children: [_jsx(Header, {}), _jsxs("div", Object.assign({ className: "app_agents-container", id: "app_agents-container", onClick: agentClickHandler }, { children: [_jsx(Agent, { id: "agent0", selected: agentSelectState[0] }), agentShowState ? _jsx(Agent, { id: "agent1", selected: agentSelectState[1] }) : '', agentShowState ? _jsx(Agent, { id: "agent2", selected: agentSelectState[2] }) : '', agentShowState ? _jsx(Agent, { id: "agent3", selected: agentSelectState[3] }) : ''] }))] })));
}
;
