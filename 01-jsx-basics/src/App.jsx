import "./App.css";
import Greeting from "./components/Greeting";
// import HelloWorld from "./components/HelloWorld";
import UserCard from "./components/UserCard";
import {useState} from "react";
import Counter from "./components/Counter.jsx";
import Logger from "./components/Logger.jsx";
import Timer from "./components/Timer.jsx";

function App() {
    const [isDeveloper] = useState(true);
    return (<div>
        <h1>My First React Project</h1>
        {/* <HelloWorld name="Berat Paban" /> */}
        <Greeting/>
        <UserCard name="Berat" age="24" isDeveloper={isDeveloper}/>
        <Counter/>
        <Logger/>
        <Timer/>
    </div>);
}

export default App;
