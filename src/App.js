import './App.css';

const organisations = [
  {
      id: 5,
      name: "Adoptees"
  },
  {
      id: 6,
      name: "ODEL"
  }
  ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Organisations />
      </header>
    </div>
  );
}

function Organisations() {
  return organisations.map((organisation) => {
    return (
      <div key={organisation.id}>
        {organisation.name}
      </div>
    );
  })
}

export default App;
