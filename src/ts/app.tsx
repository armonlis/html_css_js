import Header from "./header";
import Agent from "./agent";

export default function App() {
    return (
        <div className="app">
            <Header /> 
            <div className="app_agents-container" id="app_agents-container">
                <Agent />
                <Agent />
                <Agent />
                <Agent />
            </div>  
        </div>
    );
};