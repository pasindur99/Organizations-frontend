import './App.css';
import Organisations from "./Organizations";
import {useState} from "react";
import {Col, Row} from "reactstrap";
import List from "./List";
import Search from "./Search";

function App() {
    const [color, setColor] = useState("#008cc4");

    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = event => {
        setSearchTerm(event.target.value);
        // console.log(event.target.value);
    }
    const searchedStories = stories.filter(function (story) {
        return story.title.includes(searchTerm);
    });

    const organisations = [
        {
            id: 1,
            name: "Adoptees"
        },
        {
            id: 2,
            name: "PawLK"
        },
        {
            id: 3,
            name: "PetSo"
        }
    ];
    const [searchOrganisationsTerm, setSearchOrganisationsTerm] = useState('');
    const handleOrganisationsSearch = event => {
        setSearchOrganisationsTerm(event.target.value);
    }
    const searchedOrganisations = organisations.filter(function (organisation) {
        return organisation.name.includes(searchOrganisationsTerm);
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
                <hr/>
                <div>
                    <Search onSearch={handleSearch}/>
                    <p>Searching for <strong>{searchTerm}</strong></p>
                </div>
                <Col>
                    <Row md={2}>
                        <List list={searchedStories}/>
                    </Row>
                </Col>
                <br/>
                <hr/>
                <h1>Welfare Organisations in Srilanka</h1>
                <div>
                    <Search onSearch={handleOrganisationsSearch}/>
                    <p>Searching for <strong>{searchOrganisationsTerm}</strong></p>
                </div>
                <Col>
                    <Row md={6}>
                        <Organisations organisations={searchedOrganisations}/>
                    </Row>
                </Col>
            </div>
        </div>

    );
}

export default App;
