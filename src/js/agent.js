import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Agent(props) {
    const { agentName = 'unknown' } = props;
    const { agentCountry = 'unknown' } = props;
    const { agentImg = '/src/public/images/no-image.png' } = props;
    const { selected = '' } = props;
    return (_jsxs("div", Object.assign({ className: selected ? 'agent agent_selected' : 'agent' }, { children: [_jsx("p", Object.assign({ className: "agent_name" }, { children: agentName })), _jsx("p", Object.assign({ className: "agent_country" }, { children: agentCountry })), _jsx("div", Object.assign({ className: "agent_image-container" }, { children: _jsx("img", { className: "agent_image", src: agentImg, alt: "The agent photo." }) }))] })));
}
;
