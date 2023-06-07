import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./header";
import Agent from "./agent";
import { useState, useEffect } from "react";
export default function App() {
    const [agentSelectState, setAgentSelectState] = useState([false, false, false, false]);
    const orientation = window.screen.orientation.type;
    const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
    const [agentShowState, setAgentShowState] = useState([true, isLandscape, isLandscape, isLandscape]);
    let prevX = 0;
    let curX = 0;
    const touchInsensitive = 100;
    function resizeHandler() {
        setAgentSelectState([false, false, false, false]);
        const orientation = window.screen.orientation.type;
        const isLandscape = orientation === "landscape-primary" || orientation === "landscape-secondary";
        setAgentShowState([true, isLandscape, isLandscape, isLandscape]);
    }
    ;
    function touchHandler(event) {
        if (window.screen.orientation.type.includes('landscape'))
            return;
        if (prevX === 0) {
            prevX = Math.round(event.changedTouches[0].clientX);
            return;
        }
        curX = Math.round(event.changedTouches[0].clientX);
        const direction = curX - prevX;
        if (Math.abs(direction) < touchInsensitive) {
            curX = prevX = 0;
            return;
        }
        curX = prevX = 0;
        const index = agentShowState.findIndex(val => val === true);
        const newShowState = [];
        if (direction > 0) {
            for (let i = 0; i < 4; i += 1) {
                if (i === 0 && index === 3) {
                    newShowState.push(true);
                    continue;
                }
                if (i === index + 1) {
                    newShowState.push(true);
                    continue;
                }
                newShowState.push(false);
                setAgentShowState(newShowState);
            }
            ;
        }
        if (direction < 0) {
            for (let i = 0; i < 4; i += 1) {
                if (i === 3 && index === 0) {
                    newShowState.push(true);
                    continue;
                }
                if (i === index - 1) {
                    newShowState.push(true);
                    continue;
                }
                newShowState.push(false);
                setAgentShowState(newShowState);
            }
            ;
        }
    }
    ;
    useEffect(() => {
        function removeResList() {
            window.removeEventListener('resize', resizeHandler);
        }
        ;
        function removeTouch() {
            window.removeEventListener('touchstart', touchHandler);
            window.removeEventListener('touchend', touchHandler);
        }
        ;
        return () => { removeResList(); removeTouch(); };
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
    window.addEventListener('touchstart', touchHandler);
    window.addEventListener('touchend', touchHandler);
    return (_jsxs("div", Object.assign({ className: "app" }, { children: [_jsx(Header, {}), _jsxs("div", Object.assign({ className: "app_agents-container", id: "app_agents-container", onClick: agentClickHandler }, { children: [agentShowState[0] ? _jsx(Agent, { id: "agent0", agentImg: "/src/public/images/agent0.png", selected: agentSelectState[0] }) : '', agentShowState[1] ? _jsx(Agent, { id: "agent1", agentImg: "/src/public/images/agent1.png", selected: agentSelectState[1] }) : '', agentShowState[2] ? _jsx(Agent, { id: "agent2", agentImg: "/src/public/images/agent2.png", selected: agentSelectState[2] }) : '', agentShowState[3] ? _jsx(Agent, { id: "agent3", agentImg: "/src/public/images/agent3.png", selected: agentSelectState[3] }) : ''] }))] })));
}
;
