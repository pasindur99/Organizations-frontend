import './App.css';
import Organisations from "./Organizations";
import {useState} from "react";



function App() {
    const [color, setColor] = useState("#008cc4");
    return (
        <div>
            <div style={{background:color}}>
                <Organisations/>
                <button onClick={() => setColor("Blue")}>
                    Blue
                </button>
                <button onClick={() => setColor("Red")}>
                    Red
                </button>
            </div>
        </div>

    );
}

export default App;
