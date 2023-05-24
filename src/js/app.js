import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }
        ;
        setAgentState(newState);
    }
    ;
    return (_jsxs("div", Object.assign({ className: "app" }, { children: [_jsx(Header, {}), _jsxs("div", Object.assign({ className: "app_agents-container", id: "app_agents-container", onClick: agentClickHandler }, { children: [_jsx(Agent, { id: "agent0", selected: agentState[0] }), _jsx(Agent, { id: "agent1", selected: agentState[1] }), _jsx(Agent, { id: "agent2", selected: agentState[2] }), _jsx(Agent, { id: "agent3", selected: agentState[3] })] }))] })));
}
;
