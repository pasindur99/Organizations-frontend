import './App.css';
import Organisations from "./Organizations";
import {useState} from "react";
import {Col, Row} from "reactstrap";
import List from "./List";
import Search from "./Search";

function App() {
    const [color, setColor] = useState("#008cc4");
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = event => {
        setSearchTerm(event.target.value);
        // console.log(event.target.value);
    }
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        }, {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },];

    const searchedStories = stories.filter(function (story) {
        return story.title.includes(searchTerm);
    });

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
                <Search onSearch={handleSearch}/>
                <hr/>
                <p>
                    Searching for <strong>{searchTerm}</strong>
                </p>
            </div>
            <Col>
                <Row md={2}>
                    <List list={searchedStories}/>
                </Row>
            </Col>
            <Col>
                <Row md={6}>
                    <Organisations/>
                </Row>
            </Col>
        </div>

    );
}

export default App;
