import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./app";
const root = createRoot(document.getElementById('main'));
root.render(_jsx(App, {}));
