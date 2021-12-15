import './App.css';
import Organisations from "./Organizations";
import {useState} from "react";
import {Col, Row} from "reactstrap";

function App() {
    const [color, setColor] = useState("#008cc4");
    const handleChange = event => {
        console.log(event.target.value);
    }
    return (
        <div>
            <div className="App">
                <h1>My Hacker Stories</h1>
                <div style={{background: color}}>
                    <button onClick={() => setColor("Blue")}>
                        Blue
                    </button>
                    <button onClick={() => setColor("Red")}>
                        Red
                    </button>
                </div>
                <br/>
                <label htmlFor="search">Search: </label>
                <input id="search" type="text" onChange={handleChange}/>
                <hr/>
            </div>
            <Row>
                <Col md={3}>
                    <Organisations/>
                </Col>
            </Row>
        </div>

    );
}

export default App;
